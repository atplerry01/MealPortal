using Microsoft.EntityFrameworkCore.Migrations;

namespace MealManager.Api.Migrations
{
    public partial class UpdateMenuTransaction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MealTransactions_UserMealProfilings_UserMealProfilingId",
                table: "MealTransactions");

            migrationBuilder.DropIndex(
                name: "IX_MealTransactions_UserMealProfilingId",
                table: "MealTransactions");

            migrationBuilder.DropColumn(
                name: "UserMealProfilingId",
                table: "MealTransactions");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserMealProfilingId",
                table: "MealTransactions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_MealTransactions_UserMealProfilingId",
                table: "MealTransactions",
                column: "UserMealProfilingId");

            migrationBuilder.AddForeignKey(
                name: "FK_MealTransactions_UserMealProfilings_UserMealProfilingId",
                table: "MealTransactions",
                column: "UserMealProfilingId",
                principalTable: "UserMealProfilings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
