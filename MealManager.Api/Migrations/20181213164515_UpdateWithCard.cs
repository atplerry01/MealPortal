using Microsoft.EntityFrameworkCore.Migrations;

namespace MealManager.Api.Migrations
{
    public partial class UpdateWithCard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CardId",
                table: "UserMealProfilings",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CardId",
                table: "MealTransactions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CardId",
                table: "AspNetUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CardId",
                table: "UserMealProfilings");

            migrationBuilder.DropColumn(
                name: "CardId",
                table: "MealTransactions");

            migrationBuilder.DropColumn(
                name: "CardId",
                table: "AspNetUsers");
        }
    }
}
