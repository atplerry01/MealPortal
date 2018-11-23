
using MealManager.Api.Models.Account;

namespace MealManager.Api.Models.Transact
{
    public class UserMealProfiling
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int DepartmentMealProfilingId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual DepartmentMealProfiling DepartmentMealProfiling { get; set; }
        
    }
}