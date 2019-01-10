using Microsoft.EntityFrameworkCore.Migrations;

namespace MealManager.Api.Migrations
{
    public partial class UpdateMealTransaction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Frequency",
                table: "MealTransactions",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MealTotal",
                table: "MealTransactions",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MealTotal",
                table: "MealTransactions");

            migrationBuilder.AlterColumn<string>(
                name: "Frequency",
                table: "MealTransactions",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}
