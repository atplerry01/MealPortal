using System;
using MealManager.Api.Models.Account;
using MealManager.Api.Models.Lookup;

namespace MealManager.Api.Models.Transact
{
    public class MealTransaction
    {
        public MealTransaction()
        {
            CreatedOn = DateTime.Now;
        }

        public int Id { get; set; }
        public string UserId { get; set; }
        public int MenuId { get; set; }
        public int UserMealProfilingId { get; set; }

        public virtual ApplicationUser User { get; set; }
        public virtual Menu Menu { get; set; }
        public virtual UserMealProfiling UserMealProfiling { get; set; }
        public DateTime CreatedOn { get; set; }
        
    }
}