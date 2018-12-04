using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MealManager.Api.Models.Account;
using MealManager.Api.Models.Transact;
using MealManager.Api.Persistence;
using MealManager.Api.ViewModel.Account;
using MealManager.Api.ViewModel.Transact;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MealManager.Api.Controllers
{
    [Route("api/accounts")]
    public class AccountsController : Controller
    {
        private readonly IMapper mapper;
        private readonly ApplicationDbContext context;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly UserManager<ApplicationUser> userManager;

        private readonly IHostingEnvironment host;

        public AccountsController(IMapper mapper, IHostingEnvironment host, ApplicationDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            this.host = host;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet("Users")]
        public async Task<IEnumerable<ApplicationUserModel>> GetUserAccounts()
        {
            var results = await context.Users.ToListAsync();
            return mapper.Map<IEnumerable<ApplicationUser>, IEnumerable<ApplicationUserModel>>(results);
        }

        [HttpGet("user/profiles")]
        public async Task<IEnumerable<UserMealProfilingModel>> GetUserProfilings()
        {
            var entity = await context.UserMealProfilings
                .Include(u => u.User)
                .Include(d => d.DepartmentMealProfiling)
                .ThenInclude(dep => dep.Department)
                .Include(l => l.DepartmentMealProfiling.MealAssignment)
                .ToListAsync();

            return mapper.Map<IEnumerable<UserMealProfiling>, IEnumerable<UserMealProfilingModel>>(entity);
        }



        [HttpPost("user/create")]
        public async Task<IActionResult> CreateClientUser([FromBody] AccountSaveResource model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new ApplicationUser()
            {
                UserName = model.Username,
                Email = model.Email,
                EmailConfirmed = true,
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                IsEnabled = true
            };

            model.Password = "PassW@rd01";

            IdentityResult addUserResult = await userManager.CreateAsync(user, model.Password);

            if (!addUserResult.Succeeded)
            {
                return StatusCode(400, addUserResult);
            }

            DepartmentMealProfiling departProfile = await context.DepartmentMealProfilings.Where(d => d.DepartmentId == model.DepartmentId).FirstOrDefaultAsync();

            var userProfiling = new UserMealProfiling()
            {
                UserId = user.Id,
                DepartmentMealProfilingId = departProfile.Id
            };

            context.UserMealProfilings.Add(userProfiling);
            await context.SaveChangesAsync();

            var result = mapper.Map<ApplicationUser, ApplicationUserModel>(user);
            return StatusCode(200, result);
        }

        
        [HttpPost("user/profiling")]
        public async Task<IActionResult> CreateUserMealProfile([FromBody] UserMealProfilingSaveModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            UserMealProfiling newProfile = await context.UserMealProfilings.FirstOrDefaultAsync(u => u.UserId == model.UserId);

            if (newProfile != null) {
                return StatusCode(400, "Profiling already exist");
            }

            var entity = mapper.Map<UserMealProfilingSaveModel, UserMealProfiling>(model);
            context.UserMealProfilings.Add(entity);
            await context.SaveChangesAsync();

            entity = await context.UserMealProfilings
                .Include(u => u.User)
                .Include(d => d.DepartmentMealProfiling)
                .SingleOrDefaultAsync(it => it.Id == entity.Id);

            var result = mapper.Map<UserMealProfiling, UserMealProfilingModel>(entity);
            return Ok(result);
        }



        [HttpPost("operator/create")]
        public async Task<IActionResult> CreateOperatorUser([FromBody] AccountSaveResource model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new ApplicationUser()
            {
                UserName = model.Username,
                Email = model.Email,
                EmailConfirmed = true,
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                IsEnabled = true
            };

            IdentityResult addUserResult = await userManager.CreateAsync(user, model.Password);

            if (!addUserResult.Succeeded)
            {
                return StatusCode(400, addUserResult);
            }

            //var result = mapper.Map<ApplicationUser, AccountSaveResource>(user);
            return Ok(); //StatusCode(200, result);
        }

    }
}