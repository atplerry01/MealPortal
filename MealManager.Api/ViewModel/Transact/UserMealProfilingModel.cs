using MealManager.Api.ViewModel.Account;

namespace MealManager.Api.ViewModel.Transact
{
    public class UserMealProfilingModel
    {
        public int Id { get; set; }
        public ApplicationUserModel User { get; set; }
        public DepartmentMealProfilingModel DepartmentMealProfiling { get; set; }
        
    }
}