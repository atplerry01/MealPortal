using System;
using MealManager.Api.ViewModel.Account;
using MealManager.Api.ViewModel.Lookup;

namespace MealManager.Api.ViewModel.Transact
{
    public class MealTransactionModel
    {   
        public int Id { get; set; }
        public virtual ApplicationUserModel User { get; set; }
        public virtual MenuModel Menu { get; set; }
        public virtual UserMealProfilingModel UserMealProfiling { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}