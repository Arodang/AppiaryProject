namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Boxes",
                c => new
                    {
                        BoxId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        BoxType = c.Int(nullable: false),
                        NumberOfFramesCanFit = c.Int(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.BoxId);
            
            CreateTable(
                "dbo.Frames",
                c => new
                    {
                        BoxId = c.Int(nullable: false, identity: true),
                        Position = c.Int(nullable: false),
                        IsHaveFoundation = c.Boolean(nullable: false),
                        IsFoundationPlastic = c.Boolean(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Box_BoxId = c.Int(),
                    })
                .PrimaryKey(t => t.BoxId)
                .ForeignKey("dbo.Boxes", t => t.Box_BoxId)
                .Index(t => t.Box_BoxId);
            
            CreateTable(
                "dbo.Notes",
                c => new
                    {
                        NoteId = c.Int(nullable: false, identity: true),
                        NoteText = c.String(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.NoteId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Frames", "Box_BoxId", "dbo.Boxes");
            DropIndex("dbo.Frames", new[] { "Box_BoxId" });
            DropTable("dbo.Notes");
            DropTable("dbo.Frames");
            DropTable("dbo.Boxes");
        }
    }
}
