namespace MealManager.Api.ViewModel.Account
{
    public class AccountSaveResource
    {
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public int? DepartmentId { get; set; }

    }
}