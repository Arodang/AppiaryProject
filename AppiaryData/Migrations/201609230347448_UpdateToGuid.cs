namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateToGuid : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Boxes",
                c => new
                    {
                        BoxId = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                        BoxType = c.Int(nullable: false),
                        Position = c.Int(nullable: false),
                        NumberOfFramesCanFit = c.Int(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Hive_HiveId = c.Guid(),
                    })
                .PrimaryKey(t => t.BoxId)
                .ForeignKey("dbo.Hives", t => t.Hive_HiveId)
                .Index(t => t.Hive_HiveId);
            
            CreateTable(
                "dbo.Frames",
                c => new
                    {
                        FrameId = c.Guid(nullable: false, identity: true),
                        Position = c.Int(nullable: false),
                        IsHaveFoundation = c.Boolean(nullable: false),
                        IsFoundationPlastic = c.Boolean(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Side1_FrameSideInspectionId = c.Guid(),
                        Side2_FrameSideInspectionId = c.Guid(),
                        Box_BoxId = c.Guid(),
                    })
                .PrimaryKey(t => t.FrameId)
                .ForeignKey("dbo.FrameSideInspections", t => t.Side1_FrameSideInspectionId)
                .ForeignKey("dbo.FrameSideInspections", t => t.Side2_FrameSideInspectionId)
                .ForeignKey("dbo.Boxes", t => t.Box_BoxId)
                .Index(t => t.Side1_FrameSideInspectionId)
                .Index(t => t.Side2_FrameSideInspectionId)
                .Index(t => t.Box_BoxId);
            
            CreateTable(
                "dbo.FrameSideInspections",
                c => new
                    {
                        FrameSideInspectionId = c.Guid(nullable: false, identity: true),
                        IsBuiltOut = c.Boolean(nullable: false),
                        IsHaveHoney = c.Boolean(nullable: false),
                        IsHaveNectar = c.Boolean(nullable: false),
                        IsHavePollen = c.Boolean(nullable: false),
                        IsHaveQueenCell = c.Boolean(nullable: false),
                        IsHaveCappedQueenCell = c.Boolean(nullable: false),
                        IsHaveLarvae = c.Boolean(nullable: false),
                        IsHaveEggs = c.Boolean(nullable: false),
                        IsHaveCappedBrood = c.Boolean(nullable: false),
                        IsHaveDroneBrood = c.Boolean(nullable: false),
                        IsHaveQueen = c.Boolean(nullable: false),
                        IsHaveSupercedure = c.Boolean(nullable: false),
                        NumberOfBees = c.Int(nullable: false),
                        AmountOfHoney = c.Int(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.FrameSideInspectionId);
            
            CreateTable(
                "dbo.FrameInspections",
                c => new
                    {
                        FrameInspectionId = c.Guid(nullable: false, identity: true),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Frame_FrameId = c.Guid(),
                    })
                .PrimaryKey(t => t.FrameInspectionId)
                .ForeignKey("dbo.Frames", t => t.Frame_FrameId)
                .Index(t => t.Frame_FrameId);
            
            CreateTable(
                "dbo.Hives",
                c => new
                    {
                        HiveId = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                        HiveType = c.Int(nullable: false),
                        Position = c.Int(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Apiary_ApiaryId = c.Guid(),
                    })
                .PrimaryKey(t => t.HiveId)
                .ForeignKey("dbo.Apiaries", t => t.Apiary_ApiaryId)
                .Index(t => t.Apiary_ApiaryId);
            
            CreateTable(
                "dbo.Inspections",
                c => new
                    {
                        InspectionId = c.Guid(nullable: false, identity: true),
                        DateTimeOfInspection = c.DateTime(nullable: false),
                        Temperature = c.Int(nullable: false),
                        IsTempFahrenheit = c.Boolean(nullable: false),
                        TrafficAtEntrance = c.Int(nullable: false),
                        NumberOfDeeps = c.Int(nullable: false),
                        NumberOfMediums = c.Int(nullable: false),
                        NumberOfShallows = c.Int(nullable: false),
                        EntranceOpening = c.Int(nullable: false),
                        IsBottomBoardSolid = c.Boolean(nullable: false),
                        IsHaveFeeder = c.Boolean(nullable: false),
                        FeederDetails = c.String(),
                        Temperment = c.Int(nullable: false),
                        DroneCount = c.Int(nullable: false),
                        Population = c.Int(nullable: false),
                        BroodChamberPopulation = c.Int(nullable: false),
                        PestsPresent = c.Int(nullable: false),
                        PestsPresentOther = c.String(),
                        ResourcesHoney = c.Int(nullable: false),
                        ResourcesNectar = c.Int(nullable: false),
                        ResourcesPollen = c.Int(nullable: false),
                        BroodPattern = c.Int(nullable: false),
                        Observations = c.Int(nullable: false),
                        ObservationsEggs = c.Int(nullable: false),
                        ObservationsDrones = c.Int(nullable: false),
                        Disease = c.Int(nullable: false),
                        DiseaseOther = c.String(),
                        HiveCondition = c.Int(nullable: false),
                        InspectionObjective = c.String(),
                        ColonyAssessment = c.Int(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        ActionsTaken_InspectionTakenActionId = c.Guid(),
                        Hive_HiveId = c.Guid(),
                    })
                .PrimaryKey(t => t.InspectionId)
                .ForeignKey("dbo.InspectionTakenActions", t => t.ActionsTaken_InspectionTakenActionId)
                .ForeignKey("dbo.Hives", t => t.Hive_HiveId)
                .Index(t => t.ActionsTaken_InspectionTakenActionId)
                .Index(t => t.Hive_HiveId);
            
            CreateTable(
                "dbo.InspectionTakenActions",
                c => new
                    {
                        InspectionTakenActionId = c.Guid(nullable: false, identity: true),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.InspectionTakenActionId);
            
            CreateTable(
                "dbo.Notes",
                c => new
                    {
                        NoteId = c.Guid(nullable: false, identity: true),
                        NoteText = c.String(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Inspection_InspectionId = c.Guid(),
                    })
                .PrimaryKey(t => t.NoteId)
                .ForeignKey("dbo.Inspections", t => t.Inspection_InspectionId)
                .Index(t => t.Inspection_InspectionId);
            
            CreateTable(
                "dbo.Queens",
                c => new
                    {
                        QueenId = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                        Born = c.DateTime(nullable: false),
                        isLaying = c.Boolean(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.QueenId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Guid(nullable: false, identity: true),
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
                        ApiaryId = c.Guid(nullable: false, identity: true),
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
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Apiaries", "User_UserId", "dbo.Users");
            DropForeignKey("dbo.Hives", "Apiary_ApiaryId", "dbo.Apiaries");
            DropForeignKey("dbo.Notes", "Inspection_InspectionId", "dbo.Inspections");
            DropForeignKey("dbo.Inspections", "Hive_HiveId", "dbo.Hives");
            DropForeignKey("dbo.Inspections", "ActionsTaken_InspectionTakenActionId", "dbo.InspectionTakenActions");
            DropForeignKey("dbo.Boxes", "Hive_HiveId", "dbo.Hives");
            DropForeignKey("dbo.FrameInspections", "Frame_FrameId", "dbo.Frames");
            DropForeignKey("dbo.Frames", "Box_BoxId", "dbo.Boxes");
            DropForeignKey("dbo.Frames", "Side2_FrameSideInspectionId", "dbo.FrameSideInspections");
            DropForeignKey("dbo.Frames", "Side1_FrameSideInspectionId", "dbo.FrameSideInspections");
            DropIndex("dbo.Apiaries", new[] { "User_UserId" });
            DropIndex("dbo.Notes", new[] { "Inspection_InspectionId" });
            DropIndex("dbo.Inspections", new[] { "Hive_HiveId" });
            DropIndex("dbo.Inspections", new[] { "ActionsTaken_InspectionTakenActionId" });
            DropIndex("dbo.Hives", new[] { "Apiary_ApiaryId" });
            DropIndex("dbo.FrameInspections", new[] { "Frame_FrameId" });
            DropIndex("dbo.Frames", new[] { "Box_BoxId" });
            DropIndex("dbo.Frames", new[] { "Side2_FrameSideInspectionId" });
            DropIndex("dbo.Frames", new[] { "Side1_FrameSideInspectionId" });
            DropIndex("dbo.Boxes", new[] { "Hive_HiveId" });
            DropTable("dbo.Apiaries");
            DropTable("dbo.Users");
            DropTable("dbo.Queens");
            DropTable("dbo.Notes");
            DropTable("dbo.InspectionTakenActions");
            DropTable("dbo.Inspections");
            DropTable("dbo.Hives");
            DropTable("dbo.FrameInspections");
            DropTable("dbo.FrameSideInspections");
            DropTable("dbo.Frames");
            DropTable("dbo.Boxes");
        }
    }
}
