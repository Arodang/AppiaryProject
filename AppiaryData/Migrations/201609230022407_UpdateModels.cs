namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateModels : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Guid(nullable: false),
                        Name = c.String(),
                        Email = c.String(),
                        ProfileId = c.String(),
                        AccessToken = c.String(),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.UserId);
            
            CreateTable(
                "dbo.Apiaries",
                c => new
                    {
                        ApiaryId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Address = c.String(),
                        Description = c.String(),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        User_UserId = c.Guid(),
                    })
                .PrimaryKey(t => t.ApiaryId)
                .ForeignKey("dbo.Users", t => t.User_UserId)
                .Index(t => t.User_UserId);
            
            AddColumn("dbo.Hives", "HiveType", c => c.Int(nullable: false));
            AddColumn("dbo.Hives", "Apiary_ApiaryId", c => c.Int());
            CreateIndex("dbo.Hives", "Apiary_ApiaryId");
            AddForeignKey("dbo.Hives", "Apiary_ApiaryId", "dbo.Apiaries", "ApiaryId");
            DropColumn("dbo.Hives", "BoxType");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Hives", "BoxType", c => c.Int(nullable: false));
            DropForeignKey("dbo.Apiaries", "User_UserId", "dbo.Users");
            DropForeignKey("dbo.Hives", "Apiary_ApiaryId", "dbo.Apiaries");
            DropIndex("dbo.Apiaries", new[] { "User_UserId" });
            DropIndex("dbo.Hives", new[] { "Apiary_ApiaryId" });
            DropColumn("dbo.Hives", "Apiary_ApiaryId");
            DropColumn("dbo.Hives", "HiveType");
            DropTable("dbo.Apiaries");
            DropTable("dbo.Users");
        }
    }
}
