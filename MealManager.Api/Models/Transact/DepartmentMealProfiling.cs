using MealManager.Api.Models.Lookup;

namespace MealManager.Api.Models.Transact
{
    public class DepartmentMealProfiling
    {
        public int Id { get; set; }
        public int DepartmentId { get; set; }
        public int MealAssignmentId { get; set; }
        public virtual Department Department { get; set; }
        public virtual MealAssignment MealAssignment { get; set; }
        
    }
}