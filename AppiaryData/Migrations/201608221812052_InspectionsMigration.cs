namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InspectionsMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.FrameSideInspections",
                c => new
                    {
                        FrameSideInspectionId = c.Int(nullable: false, identity: true),
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
                        FrameInspectionId = c.Int(nullable: false, identity: true),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Frame_BoxId = c.Int(),
                    })
                .PrimaryKey(t => t.FrameInspectionId)
                .ForeignKey("dbo.Frames", t => t.Frame_BoxId)
                .Index(t => t.Frame_BoxId);
            
            CreateTable(
                "dbo.Hives",
                c => new
                    {
                        HiveId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        BoxType = c.Int(nullable: false),
                        Position = c.Int(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.HiveId);
            
            CreateTable(
                "dbo.Inspections",
                c => new
                    {
                        InspectionId = c.Int(nullable: false, identity: true),
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
                        ActionsTaken_InspectionTakenActionId = c.Int(),
                        Hive_HiveId = c.Int(),
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
                        InspectionTakenActionId = c.Int(nullable: false, identity: true),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.InspectionTakenActionId);
            
            CreateTable(
                "dbo.Queens",
                c => new
                    {
                        QueenId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Born = c.DateTime(nullable: false),
                        isLaying = c.Boolean(nullable: false),
                        CreatedDateTime = c.DateTime(nullable: false),
                        LastModifiedDateTime = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.QueenId);
            
            AddColumn("dbo.Boxes", "Position", c => c.Int(nullable: false));
            AddColumn("dbo.Boxes", "Hive_HiveId", c => c.Int());
            AddColumn("dbo.Frames", "Side1_FrameSideInspectionId", c => c.Int());
            AddColumn("dbo.Frames", "Side2_FrameSideInspectionId", c => c.Int());
            AddColumn("dbo.Notes", "Inspection_InspectionId", c => c.Int());
            CreateIndex("dbo.Boxes", "Hive_HiveId");
            CreateIndex("dbo.Frames", "Side1_FrameSideInspectionId");
            CreateIndex("dbo.Frames", "Side2_FrameSideInspectionId");
            CreateIndex("dbo.Notes", "Inspection_InspectionId");
            AddForeignKey("dbo.Frames", "Side1_FrameSideInspectionId", "dbo.FrameSideInspections", "FrameSideInspectionId");
            AddForeignKey("dbo.Frames", "Side2_FrameSideInspectionId", "dbo.FrameSideInspections", "FrameSideInspectionId");
            AddForeignKey("dbo.Boxes", "Hive_HiveId", "dbo.Hives", "HiveId");
            AddForeignKey("dbo.Notes", "Inspection_InspectionId", "dbo.Inspections", "InspectionId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Notes", "Inspection_InspectionId", "dbo.Inspections");
            DropForeignKey("dbo.Inspections", "Hive_HiveId", "dbo.Hives");
            DropForeignKey("dbo.Inspections", "ActionsTaken_InspectionTakenActionId", "dbo.InspectionTakenActions");
            DropForeignKey("dbo.Boxes", "Hive_HiveId", "dbo.Hives");
            DropForeignKey("dbo.FrameInspections", "Frame_BoxId", "dbo.Frames");
            DropForeignKey("dbo.Frames", "Side2_FrameSideInspectionId", "dbo.FrameSideInspections");
            DropForeignKey("dbo.Frames", "Side1_FrameSideInspectionId", "dbo.FrameSideInspections");
            DropIndex("dbo.Notes", new[] { "Inspection_InspectionId" });
            DropIndex("dbo.Inspections", new[] { "Hive_HiveId" });
            DropIndex("dbo.Inspections", new[] { "ActionsTaken_InspectionTakenActionId" });
            DropIndex("dbo.FrameInspections", new[] { "Frame_BoxId" });
            DropIndex("dbo.Frames", new[] { "Side2_FrameSideInspectionId" });
            DropIndex("dbo.Frames", new[] { "Side1_FrameSideInspectionId" });
            DropIndex("dbo.Boxes", new[] { "Hive_HiveId" });
            DropColumn("dbo.Notes", "Inspection_InspectionId");
            DropColumn("dbo.Frames", "Side2_FrameSideInspectionId");
            DropColumn("dbo.Frames", "Side1_FrameSideInspectionId");
            DropColumn("dbo.Boxes", "Hive_HiveId");
            DropColumn("dbo.Boxes", "Position");
            DropTable("dbo.Queens");
            DropTable("dbo.InspectionTakenActions");
            DropTable("dbo.Inspections");
            DropTable("dbo.Hives");
            DropTable("dbo.FrameInspections");
            DropTable("dbo.FrameSideInspections");
        }
    }
}
