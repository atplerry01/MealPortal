using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MealManager.Api.Models.Transact;
using MealManager.Api.Persistence;
using MealManager.Api.ViewModel.Transact;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MealManager.Api.Controllers
{
    [Route("api/transactions")]
    public class TransactionsController : Controller
    {
        private readonly IMapper mapper;
        private readonly ApplicationDbContext context;
        public TransactionsController(IMapper mapper, ApplicationDbContext context)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<MealTransactionModel>> GetDepartments()
        {
            var entity = await context.MealTransactions.ToListAsync();
            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDepartment([FromBody] MealTransactionSaveModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            MealTransaction existingModel = await context.MealTransactions.FirstOrDefaultAsync(u => u.UserId == model.UserId);

            // MealTransaction: Use Meal
            if (existingModel != null)
            {
                return StatusCode(400, "Transaction already exist");
            }

            var entity = mapper.Map<MealTransactionSaveModel, MealTransaction>(model);
            context.MealTransactions.Add(entity);
            await context.SaveChangesAsync();

            entity = await context.MealTransactions.SingleOrDefaultAsync(it => it.Id == entity.Id);
            var result = mapper.Map<MealTransaction, MealTransactionModel>(entity);
            return Ok(result);
        }


        
    }
}