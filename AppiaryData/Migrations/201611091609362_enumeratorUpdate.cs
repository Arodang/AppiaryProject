namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class enumeratorUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.InspectionActions", "HiveManagementDetails", c => c.String());
            AddColumn("dbo.InspectionActions", "MiteCount", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.InspectionActions", "MiteCount");
            DropColumn("dbo.InspectionActions", "HiveManagementDetails");
        }
    }
}
