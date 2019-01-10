using Microsoft.EntityFrameworkCore.Migrations;

namespace MealManager.Api.Migrations
{
    public partial class UpdateMealTransaction001 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MealTransactions_Menus_MenuId",
                table: "MealTransactions");

            migrationBuilder.DropIndex(
                name: "IX_MealTransactions_MenuId",
                table: "MealTransactions");

            migrationBuilder.DropColumn(
                name: "MenuId",
                table: "MealTransactions");

            migrationBuilder.AddColumn<string>(
                name: "Frequency",
                table: "MealTransactions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Frequency",
                table: "MealTransactions");

            migrationBuilder.AddColumn<int>(
                name: "MenuId",
                table: "MealTransactions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_MealTransactions_MenuId",
                table: "MealTransactions",
                column: "MenuId");

            migrationBuilder.AddForeignKey(
                name: "FK_MealTransactions_Menus_MenuId",
                table: "MealTransactions",
                column: "MenuId",
                principalTable: "Menus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
