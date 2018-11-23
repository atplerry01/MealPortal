using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MealManager.Api.Models.Lookup;
using MealManager.Api.Models.Transact;
using MealManager.Api.Persistence;
using MealManager.Api.ViewModel.Lookup;
using MealManager.Api.ViewModel.Transact;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MealManager.Api.Controllers
{
    //[Authorize]
    [Route("api/lookups")]
    public class LookupsController : Controller
    {
        private readonly IMapper mapper;
        private readonly ApplicationDbContext context;

        public LookupsController(IMapper mapper, ApplicationDbContext context)
        {
            this.context = context;
            this.mapper = mapper;
        }

        /// Departments

        [HttpGet("departments")]
        public async Task<IEnumerable<DepartmentModel>> GetDepartments()
        {
            var entity = await context.Departments.ToListAsync();
            return mapper.Map<IEnumerable<Department>, IEnumerable<DepartmentModel>>(entity);
        }

        [HttpPost("departments")]
        public async Task<IActionResult> CreateDepartment([FromBody] DepartmentModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            Department existingModel = await context.Departments.FirstOrDefaultAsync(u => u.Name == model.Name && u.JobFunction == model.JobFunction);

            if (existingModel != null)
            {
                return StatusCode(400, "Department already exist");
            }

            var entity = mapper.Map<DepartmentModel, Department>(model);
            context.Departments.Add(entity);
            await context.SaveChangesAsync();

            entity = await context.Departments.SingleOrDefaultAsync(it => it.Id == entity.Id);

            var result = mapper.Map<Department, DepartmentModel>(entity);
            return Ok(result);
        }




        //////Menus

        [HttpGet("Menus")]
        public async Task<IEnumerable<MenuModel>> GetMenus()
        {
            var results = await context.Menus.ToListAsync();
            return mapper.Map<IEnumerable<Menu>, IEnumerable<MenuModel>>(results);
        }

        [HttpPost("Menus")]
        public async Task<IActionResult> CreateMenu([FromBody] MenuSaveModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            Menu newProfile = await context.Menus.FirstOrDefaultAsync(u => u.Name == model.Name);

            if (newProfile != null)
            {
                return StatusCode(400, "Menu Already Exist");
            }

            var entity = mapper.Map<MenuSaveModel, Menu>(model);
            context.Menus.Add(entity);
            await context.SaveChangesAsync();

            entity = await context.Menus.SingleOrDefaultAsync(it => it.Id == entity.Id);
            var result = mapper.Map<Menu, MenuModel>(entity);

            return Ok(result);
        }


        [HttpGet("department/profiling")]
        public async Task<IEnumerable<DepartmentMealProfilingModel>> GetDepartmentProfilings()
        {
            var entity = await context.DepartmentMealProfilings
                .Include(u => u.Department)
                .Include(d => d.MealAssignment)
                .ToListAsync();

            return mapper.Map<IEnumerable<DepartmentMealProfiling>, IEnumerable<DepartmentMealProfilingModel>>(entity);
        }

        [HttpPost("department/profiling")]
        public async Task<IActionResult> CreateDepartmentProfile([FromBody] DepartmentMealProfilingSaveModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            DepartmentMealProfiling existingEntity = await context.DepartmentMealProfilings.FirstOrDefaultAsync(u => u.DepartmentId == model.DepartmentId);

            if (existingEntity != null)
            {
                // Update the Profile
                var mealProfile = await context.DepartmentMealProfilings.SingleOrDefaultAsync(u => u.Id == existingEntity.Id);
                mealProfile.MealAssignmentId = model.MealAssignmentId;
                mealProfile.DepartmentId = model.DepartmentId;

                context.Entry(mealProfile).State = EntityState.Modified;
                await context.SaveChangesAsync();

                var updateEntity = await context.DepartmentMealProfilings
                   .Include(u => u.Department)
                   .Include(d => d.MealAssignment)
                   .SingleOrDefaultAsync(it => it.Id == mealProfile.Id);

                var updateResult = mapper.Map<DepartmentMealProfiling, DepartmentMealProfilingModel>(updateEntity);
                return Ok(updateResult);
            }

            var entity = mapper.Map<DepartmentMealProfilingSaveModel, DepartmentMealProfiling>(model);
            context.DepartmentMealProfilings.Add(entity);
            await context.SaveChangesAsync();

            entity = await context.DepartmentMealProfilings
                .Include(u => u.Department)
                .Include(d => d.MealAssignment)
                .SingleOrDefaultAsync(it => it.Id == entity.Id);

            var result = mapper.Map<DepartmentMealProfiling, DepartmentMealProfilingModel>(entity);
            return Ok(result);
        }



        [HttpGet("entitlements")]
        public async Task<IEnumerable<MealAssignmentModel>> GetEntitlementss()
        {
            var entity = await context.MealAssignments.ToListAsync();
            return mapper.Map<IEnumerable<MealAssignment>, IEnumerable<MealAssignmentModel>>(entity);
        }



    }
}