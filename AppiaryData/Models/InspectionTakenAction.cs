using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    class InspectionTakenAction : BaseModel
    {
        [Key, Required]
        public int InspectionTakenActionId { get; set; }
    }
}
