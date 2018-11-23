using MealManager.Api.Models.Lookup;
using MealManager.Api.Models.Account;
using MealManager.Api.Models.Transact;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MealManager.Api.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected ApplicationDbContext()
        {
        }

        public DbSet<RefreshToken> RefreshTokens { get; set; }

        // Lookups
        public DbSet<Department> Departments { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<MealAssignment> MealAssignments { get; set; }
        public DbSet<DocumentUpload> DocumentUploads { get; set; }


        // Transact
        public DbSet<MealTransaction> MealTransactions { get; set; }
        public DbSet<DepartmentMealProfiling> DepartmentMealProfilings { get; set; }
        public DbSet<UserMealProfiling> UserMealProfilings { get; set; }

     


        public void InsertNew(RefreshToken token)
        {
            var tokenModel = RefreshTokens.SingleOrDefault(i => i.UserId == token.UserId);
            if (tokenModel != null)
            {
                RefreshTokens.Remove(tokenModel);
                SaveChanges();
            }
            RefreshTokens.Add(token);
            SaveChanges();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RefreshToken>()
                .HasAlternateKey(c => c.UserId)
                .HasName("refreshToken_UserId");
            modelBuilder.Entity<RefreshToken>()
                .HasAlternateKey(c => c.Token)
                .HasName("refreshToken_Token");

            base.OnModelCreating(modelBuilder);
        }




    }

}
