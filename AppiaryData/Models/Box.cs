using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class Box : BaseModel
    {
        public enum BoxTypeEnum { Deep, Medium, Shallow, Feeder }

        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid BoxId { get; set; }

        public string Name { get; set; }

        public BoxTypeEnum BoxType { get; set; }

        public int Position { get; set; }

        public int NumberOfFramesCanFit { get; set; }

        public virtual List<Frame> Frames { get; set; }
    }
}
