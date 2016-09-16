using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class BaseModel
    {
        public enum AmountQualifiersEnum { High, Medium, Low, None }

        [Required]
        public DateTime CreatedDateTime { get; set; }

        [Required]
        public DateTime LastModifiedDateTime { get; set; }

        [Required]
        public string CreatedBy { get; set; }
    }
}
