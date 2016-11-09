namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUserInspections : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Inspections", "User_UserId", c => c.Guid());
            CreateIndex("dbo.Inspections", "User_UserId");
            AddForeignKey("dbo.Inspections", "User_UserId", "dbo.Users", "UserId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Inspections", "User_UserId", "dbo.Users");
            DropIndex("dbo.Inspections", new[] { "User_UserId" });
            DropColumn("dbo.Inspections", "User_UserId");
        }
    }
}
