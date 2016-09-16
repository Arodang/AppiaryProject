using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class Hive : BaseModel
    {
        public enum HiveTypeEnum { Nuc, Langstroth10Frame, Langstroth8Frame, TopBar, Warre, NationalStandard }

        [Key, Required]
        public int HiveId { get; set; }

        public string Name { get; set; }

        public HiveTypeEnum HiveType { get; set; }

        public int Position { get; set; }

        public List<Box> Boxes { get; set; }
    }
}
