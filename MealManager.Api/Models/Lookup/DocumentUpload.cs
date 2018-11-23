
using MealManager.Api.Models.Account;

namespace MealManager.Api.Models.Lookup
{
    public class DocumentUpload
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FilePath { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}