using System;
using System.Collections.Generic;
using System.Linq;
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
            var entity = await context.MealTransactions
                .Include(u => u.User)
                .ToListAsync();
            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }

        [HttpPost("menu")]
        public async Task<IActionResult> CreateMealTransaction([FromBody] MealTransactionSaveModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            DateTime start = DateTime.Now.Date;
            DateTime end = DateTime.Now;

            // get userMealProfiling
            var userMealProfile = await context.UserMealProfilings
                    .Include(u => u.DepartmentMealProfiling)
                    .ThenInclude(m => m.MealAssignment)
                    .FirstOrDefaultAsync(d => d.CardId == model.CardId); //d => d.CardId == model.CardId

            var mealTrans = await context.MealTransactions
                    .Where(u => u.CardId == model.CardId && (u.CreatedOn >= start && u.CreatedOn <= end))
                    .ToListAsync();

            var mealCount = userMealProfile.DepartmentMealProfiling.MealAssignment.MealEntitled;

            if (mealTrans.Count() >= userMealProfile.DepartmentMealProfiling.MealAssignment.MealEntitled) {
                return StatusCode(400, "Transaction already exist");
            }
           
            var entity = mapper.Map<MealTransactionSaveModel, MealTransaction>(model);
            entity.Frequency = mealTrans.Count() + 1; //(mealTrans.Count() + 1).ToString() + "/" + mealCount.ToString();
            entity.MealTotal = mealCount;
            entity.UserId = userMealProfile.UserId;
            
            context.MealTransactions.Add(entity);
            await context.SaveChangesAsync();

            entity = await context.MealTransactions
                .Include(u => u.User)
                .SingleOrDefaultAsync(it => it.Id == entity.Id);
            var result = mapper.Map<MealTransaction, MealTransactionModel>(entity);
            return Ok(result);

        }

        [HttpGet("today/card/{cardId}")]
        public async Task<IEnumerable<MealTransactionModel>> UserTransactions(string cardId)
        {
            DateTime start = DateTime.Now.Date;
            DateTime end = DateTime.Now;

            int month, year, day = new int();

            day = DateTime.Now.Day;
            month = DateTime.Now.Month;
            year = DateTime.Now.Year;

            var raw1 = year + "-" + month + "-" + day + " 00:00:00.000";
            var raw2 = year + "-" + month + "-" + day + " 23:59:59.599";

            start = DateTime.Parse(raw1);
            end = DateTime.Parse(raw2);

            var entity = await context.MealTransactions
                .Where(u => u.CardId == cardId && (u.CreatedOn >= start && u.CreatedOn <= end))
                .Include(u => u .User)
                .ToListAsync();
            
            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }

        [HttpGet("thisMonth/card/{cardId}")]
        public async Task<IEnumerable<MealTransactionModel>> UserThisMonthTransactions(string cardId)
        {
            DateTime start = DateTime.Now.Date;
            DateTime end = DateTime.Now;

            int first, last = new int();
            int month, year = new int();
            
            month = DateTime.Now.Month;
            year = DateTime.Now.Year;

            first = 1;
            last = DateTime.DaysInMonth(year, month);

            var raw1 = year + "-" + month + "-" + first + " 00:00:00.000";
            var raw2 = year + "-" + month + "-" + last + " 23:59:59.599";

            start = DateTime.Parse(raw1 );
            end = DateTime.Parse(raw2);

            var entity = await context.MealTransactions
                .Where(u => u.CardId == cardId && (u.CreatedOn >= start && u.CreatedOn <= end))
                .Include(u => u.User)
                .ToListAsync();
            
            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }

        [HttpGet("LastMonth/card/{cardId}")]
        public async Task<IEnumerable<MealTransactionModel>> UserLastMonthTransactions(string cardId)
        {
            DateTime start = DateTime.Now.Date;
            DateTime end = DateTime.Now;

            int first, last = new int();
            int month, year = new int();
            
            month = DateTime.Now.Month - 1;
            year = DateTime.Now.Year;

            first = 1;
            last = DateTime.DaysInMonth(year, month);

            var raw1 = year + "-" + month + "-" + first + " 00:00:00.000";
            var raw2 = year + "-" + month + "-" + last + " 23:59:59.599";

            start = DateTime.Parse(raw1 );
            end = DateTime.Parse(raw2);

            var entity = await context.MealTransactions
                .Where(u => u.CardId == cardId && (u.CreatedOn >= start && u.CreatedOn <= end))
                .Include(u => u.User)
                .ToListAsync();
            
            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }


        [HttpGet("today")]
        public async Task<IEnumerable<MealTransactionModel>> TodayTransaction()
        {
            DateTime start = DateTime.Now.Date;
            DateTime end = DateTime.Now;

            int month, year, day = new int();

            day = DateTime.Now.Day;
            month = DateTime.Now.Month;
            year = DateTime.Now.Year;

            var raw1 = year + "-" + month + "-" + day + " 00:00:00.000";
            var raw2 = year + "-" + month + "-" + day + " 23:59:59.599";

            start = DateTime.Parse(raw1);
            end = DateTime.Parse(raw2);

           var entity = await context.MealTransactions
                    .Where(u => u.CreatedOn >= start && u.CreatedOn <= end)
                    .Include(um => um.User)
                    .OrderByDescending(d => d.Frequency)
                    .GroupBy(y => y.CardId).Select(u => u.First())
                    .Distinct()
                    .ToListAsync();

            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }

        [HttpGet("today1")]
        public async Task<IEnumerable<MealTransactionModel>> ThisDay()
        {
            DateTime start = DateTime.Now.Date;
            DateTime end = DateTime.Now;

            int first, last = new int();
            int month, year, day = new int();

            day = DateTime.Now.Day;
            month = DateTime.Now.Month;
            year = DateTime.Now.Year;

            var raw1 = year + "-" + month + "-" + day + " 00:00:00.000";
            var raw2 = year + "-" + month + "-" + day + " 23:59:59.599";

            start = DateTime.Parse(raw1);
            end = DateTime.Parse(raw2);

            var entity = await context.MealTransactions
                .Include(u => u.User)
                //.Include(m => m.Menu)
                .Where(u => u.CreatedOn >= start && u.CreatedOn <= end).ToListAsync();
            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }

        [HttpGet("thisMonth")]
        public async Task<IEnumerable<MealTransactionModel>> Thismonth()
        {
            DateTime start = DateTime.Now.Date;
            DateTime end = DateTime.Now;

            int first, last = new int();
            int month, year = new int();
            
            month = DateTime.Now.Month;
            year = DateTime.Now.Year;

            first = 1;
            last = DateTime.DaysInMonth(year, month);

            var raw1 = year + "-" + month + "-" + first + " 00:00:00.000";
            var raw2 = year + "-" + month + "-" + last + " 23:59:59.599";

            start = DateTime.Parse(raw1 );
            end = DateTime.Parse(raw2);

             var entity = await context.MealTransactions
                    .Where(u => u.CreatedOn >= start && u.CreatedOn <= end)
                    .Include(um => um.User)
                    //.OrderByDescending(d => d.Frequency)
                    //.GroupBy(y => new {y.CreatedOn,}).Select(u => u.First())
                    //.Distinct()
                    .ToListAsync();

            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);

        }

        [HttpGet("lastMonth")]
        public async Task<IEnumerable<MealTransactionModel>> Lastmonth()
        {
            DateTime start = DateTime.Now.Date;
            DateTime end = DateTime.Now;

            int first, last = new int();
            int month, year = new int();
            
            month = DateTime.Now.Month - 1;
            year = DateTime.Now.Year;

            first = 1;
            last = DateTime.DaysInMonth(year, month);

            var raw1 = year + "-" + month + "-" + first + " 00:00:00.000";
            var raw2 = year + "-" + month + "-" + last + " 23:59:59.599";

            start = DateTime.Parse(raw1 );
            end = DateTime.Parse(raw2);

            // var entity = await context.MealTransactions
            //     .Include(u => u.User)
            //     //.Include(m => m.Menu)
            //     .Where(u => u.CreatedOn >= start && u.CreatedOn <= end).ToListAsync();

            var entity = await context.MealTransactions
                .Where(u => u.CreatedOn >= start && u.CreatedOn <= end)
                .Include(um => um.User)
                .OrderByDescending(d => d.Frequency)
                .GroupBy(y => y.CardId).Select(u => u.First())
                .Distinct()
                .ToListAsync();

            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }

        [HttpGet("daterange")]
        public async Task<IEnumerable<MealTransactionModel>> DateRangeMonth([FromQuery]string startDate, [FromQuery]string endDate)
        {
        
            var start = DateTime.Parse(startDate);
            var end = DateTime.Parse(endDate);
      
            var entity = await context.MealTransactions
                .Where(u => u.CreatedOn >= start && u.CreatedOn <= end)
                .Include(um => um.User)
                .OrderByDescending(d => d.Frequency)
                .GroupBy(y => y.CardId).Select(u => u.First())
                .Distinct()
                .ToListAsync();

            return mapper.Map<IEnumerable<MealTransaction>, IEnumerable<MealTransactionModel>>(entity);
        }

    }
}