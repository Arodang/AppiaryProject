namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AutoUpdateUserId : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Apiaries", "User_UserId", "dbo.Users");
            DropPrimaryKey("dbo.Users");
            AlterColumn("dbo.Users", "UserId", c => c.Guid(nullable: false, identity: true));
            AddPrimaryKey("dbo.Users", "UserId");
            AddForeignKey("dbo.Apiaries", "User_UserId", "dbo.Users", "UserId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Apiaries", "User_UserId", "dbo.Users");
            DropPrimaryKey("dbo.Users");
            AlterColumn("dbo.Users", "UserId", c => c.Guid(nullable: false));
            AddPrimaryKey("dbo.Users", "UserId");
            AddForeignKey("dbo.Apiaries", "User_UserId", "dbo.Users", "UserId");
        }
    }
}
