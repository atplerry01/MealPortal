using System;
using MealManager.Api.ViewModel.Account;
using MealManager.Api.ViewModel.Lookup;

namespace MealManager.Api.ViewModel.Transact
{
    public class MealTransactionSaveModel
    {   
        public string UserId { get; set; }
        public int MenuId { get; set; }
        //public int UserMealProfilingId { get; set; } get this using userid
    }
}