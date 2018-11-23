using MealManager.Api.ViewModel.Account;
using MealManager.Api.ViewModel.Lookup;

namespace MealManager.Api.ViewModel.Transact
{
    public class DepartmentMealProfilingModel
    {
        public int Id { get; set; }
        public DepartmentModel Department { get; set; }
        public MealAssignmentModel MealAssignment { get; set; }
    }
}