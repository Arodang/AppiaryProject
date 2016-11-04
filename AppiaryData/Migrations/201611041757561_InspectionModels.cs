namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InspectionModels : DbMigration
    {
        public override void Up()
        {
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
                "dbo.Inspections",
                c => new
                    {
                        InspectionId = c.Guid(nullable: false, identity: true),
                        DateTimeOfInspection = c.DateTime(nullable: false),
                        Temperature = c.Int(nullable: false),
                        TrafficAtEntrance = c.Int(nullable: false),
                        Purpose = c.String(),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Actions_InspectionActionsId = c.Guid(),
                        Conclusion_InspectionConclusionId = c.Guid(),
                        Hive_HiveId = c.Guid(),
                    })
                .PrimaryKey(t => t.InspectionId)
                .ForeignKey("dbo.InspectionActions", t => t.Actions_InspectionActionsId)
                .ForeignKey("dbo.InspectionConclusions", t => t.Conclusion_InspectionConclusionId)
                .ForeignKey("dbo.Hives", t => t.Hive_HiveId)
                .Index(t => t.Actions_InspectionActionsId)
                .Index(t => t.Conclusion_InspectionConclusionId)
                .Index(t => t.Hive_HiveId);
            
            CreateTable(
                "dbo.InspectionActions",
                c => new
                    {
                        InspectionActionsId = c.Guid(nullable: false, identity: true),
                        Feed = c.Boolean(nullable: false),
                        FeedSugarwater = c.Boolean(nullable: false),
                        FeedPollenPatty = c.Boolean(nullable: false),
                        FeedOther = c.String(),
                        AddFeeder = c.Boolean(nullable: false),
                        RefillFeeder = c.Boolean(nullable: false),
                        AddBoxes = c.Boolean(nullable: false),
                        AddExcluder = c.Boolean(nullable: false),
                        Requeen = c.Boolean(nullable: false),
                        AddOtherEquipment = c.Boolean(nullable: false),
                        AddOtherEquipmentDetails = c.String(),
                        Treatment = c.Boolean(nullable: false),
                        TreatmentDetails = c.String(),
                        PestManagement = c.Boolean(nullable: false),
                        PestManagementDetails = c.String(),
                        HiveManagement = c.Boolean(nullable: false),
                        MiteCountMethod = c.String(),
                        MiteCountAmount = c.String(),
                        OtherActions = c.String(),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.InspectionActionsId);
            
            CreateTable(
                "dbo.BoxInspections",
                c => new
                    {
                        BoxInspectionId = c.Guid(nullable: false, identity: true),
                        BeesAmount = c.Int(nullable: false),
                        IsBuiltOut = c.Boolean(nullable: false),
                        Honey = c.Boolean(nullable: false),
                        HoneyAmount = c.Int(nullable: false),
                        Nectar = c.Boolean(nullable: false),
                        Pollen = c.Boolean(nullable: false),
                        Queen = c.Boolean(nullable: false),
                        Larva = c.Boolean(nullable: false),
                        Eggs = c.Boolean(nullable: false),
                        CappedBrood = c.Boolean(nullable: false),
                        DroneBrood = c.Boolean(nullable: false),
                        QueenCup = c.Boolean(nullable: false),
                        CappedQueen = c.Boolean(nullable: false),
                        SupercedureCell = c.Boolean(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Box_BoxId = c.Guid(),
                        Inspection_InspectionId = c.Guid(),
                    })
                .PrimaryKey(t => t.BoxInspectionId)
                .ForeignKey("dbo.Boxes", t => t.Box_BoxId)
                .ForeignKey("dbo.Inspections", t => t.Inspection_InspectionId)
                .Index(t => t.Box_BoxId)
                .Index(t => t.Inspection_InspectionId);
            
            CreateTable(
                "dbo.InspectionConclusions",
                c => new
                    {
                        InspectionConclusionId = c.Guid(nullable: false, identity: true),
                        Temperment = c.Int(nullable: false),
                        DroneCount = c.Int(nullable: false),
                        HoneyPopulation = c.Int(nullable: false),
                        BroodChamberPopulation = c.Int(nullable: false),
                        ResourcesHoney = c.Int(nullable: false),
                        ResourcesNectar = c.Int(nullable: false),
                        ResourcesPollen = c.Int(nullable: false),
                        BroodPattern = c.Int(nullable: false),
                        QueenAge = c.Int(nullable: false),
                        Bearding = c.Boolean(nullable: false),
                        EggsAmount = c.Int(nullable: false),
                        Queen = c.Boolean(nullable: false),
                        QueenCells = c.Boolean(nullable: false),
                        DronesAmount = c.Int(nullable: false),
                        PollenIncoming = c.Boolean(nullable: false),
                        Notes = c.String(),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.InspectionConclusionId);
            
            CreateTable(
                "dbo.Notes",
                c => new
                    {
                        NoteId = c.Guid(nullable: false, identity: true),
                        NoteText = c.String(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.NoteId);
            
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
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Apiaries", "User_UserId", "dbo.Users");
            DropForeignKey("dbo.Inspections", "Hive_HiveId", "dbo.Hives");
            DropForeignKey("dbo.Inspections", "Conclusion_InspectionConclusionId", "dbo.InspectionConclusions");
            DropForeignKey("dbo.BoxInspections", "Inspection_InspectionId", "dbo.Inspections");
            DropForeignKey("dbo.BoxInspections", "Box_BoxId", "dbo.Boxes");
            DropForeignKey("dbo.Inspections", "Actions_InspectionActionsId", "dbo.InspectionActions");
            DropForeignKey("dbo.FrameInspections", "Frame_FrameId", "dbo.Frames");
            DropForeignKey("dbo.Hives", "Apiary_ApiaryId", "dbo.Apiaries");
            DropForeignKey("dbo.Boxes", "Hive_HiveId", "dbo.Hives");
            DropForeignKey("dbo.Frames", "Box_BoxId", "dbo.Boxes");
            DropForeignKey("dbo.Frames", "Side2_FrameSideInspectionId", "dbo.FrameSideInspections");
            DropForeignKey("dbo.Frames", "Side1_FrameSideInspectionId", "dbo.FrameSideInspections");
            DropIndex("dbo.BoxInspections", new[] { "Inspection_InspectionId" });
            DropIndex("dbo.BoxInspections", new[] { "Box_BoxId" });
            DropIndex("dbo.Inspections", new[] { "Hive_HiveId" });
            DropIndex("dbo.Inspections", new[] { "Conclusion_InspectionConclusionId" });
            DropIndex("dbo.Inspections", new[] { "Actions_InspectionActionsId" });
            DropIndex("dbo.FrameInspections", new[] { "Frame_FrameId" });
            DropIndex("dbo.Frames", new[] { "Box_BoxId" });
            DropIndex("dbo.Frames", new[] { "Side2_FrameSideInspectionId" });
            DropIndex("dbo.Frames", new[] { "Side1_FrameSideInspectionId" });
            DropIndex("dbo.Boxes", new[] { "Hive_HiveId" });
            DropIndex("dbo.Hives", new[] { "Apiary_ApiaryId" });
            DropIndex("dbo.Apiaries", new[] { "User_UserId" });
            DropTable("dbo.Users");
            DropTable("dbo.Queens");
            DropTable("dbo.Notes");
            DropTable("dbo.InspectionConclusions");
            DropTable("dbo.BoxInspections");
            DropTable("dbo.InspectionActions");
            DropTable("dbo.Inspections");
            DropTable("dbo.FrameInspections");
            DropTable("dbo.FrameSideInspections");
            DropTable("dbo.Frames");
            DropTable("dbo.Boxes");
            DropTable("dbo.Hives");
            DropTable("dbo.Apiaries");
        }
    }
}
