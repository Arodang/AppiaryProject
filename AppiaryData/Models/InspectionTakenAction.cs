using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class InspectionActions : BaseModel
    {
        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid InspectionActionsId { get; set; }

        public bool Feed { get; set; }

        public bool FeedSugarwater { get; set; }

        public bool FeedPollenPatty { get; set; }

        public string FeedOther { get; set; }

        public bool AddFeeder { get; set; }

        public bool RefillFeeder { get; set; }

        public bool AddBoxes { get; set; }

        public bool AddExcluder { get; set; }

        public bool Requeen { get; set; }

        public bool AddOtherEquipment { get; set; }

        public string AddOtherEquipmentDetails { get; set; }

        public bool Treatment { get; set; }

        public string TreatmentDetails { get; set; }

        public bool PestManagement { get; set; }

        public string PestManagementDetails { get; set; }

        public bool HiveManagement { get; set; }

        public string MiteCountMethod { get; set; }

        public string MiteCountAmount { get; set; }

        public string OtherActions { get; set; }
    }
}
