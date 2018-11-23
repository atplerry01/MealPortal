using MealManager.Api.ViewModel.Account;
using MealManager.Api.ViewModel.Lookup;

namespace MealManager.Api.ViewModel.Transact
{
    public class DepartmentMealProfilingSaveModel
    {
        public int Id { get; set; }
        public int DepartmentId { get; set; }
        public int MealAssignmentId { get; set; }
    }
}