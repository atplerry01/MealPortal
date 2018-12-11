using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;

using MealManager.Api.Models.Account;
using MealManager.Api.Persistence;

namespace MealManager.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                //.UseUrls("http://localhost:5000/")
                .UseStartup<Startup>();

        // public static void Main(string[] args)
        // {
        //     var host = BuildWebHost(args);

        //     using (var scope = host.Services.CreateScope())
        //     {
        //         var services = scope.ServiceProvider;
        //         try
        //         {
        //             var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
        //             var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
        //             ApiDbSeedData.Seed(userManager, roleManager).Wait();
        //         }
        //         catch (Exception ex)
        //         {
        //             var logger = services.GetRequiredService<ILogger<Program>>();
        //             logger.LogError(ex, "An error occurred while seeding the database.");
        //         }
        //     }
        //     host.Run();
        // }

        // public static IWebHost BuildWebHost(string[] args) =>
        //     WebHost.CreateDefaultBuilder(args)
        //         .UseStartup<Startup>()
        //         .Build();
    
    }
}
