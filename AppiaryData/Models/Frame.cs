using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppiaryData.Models
{
    public class Frame : BaseModel
    {
        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid FrameId { get; set; }

        public int Position { get; set; }

        public bool IsHaveFoundation { get; set; }

        public bool IsFoundationPlastic { get; set; }

        public FrameSideInspection Side1 { get; set; }

        public FrameSideInspection Side2 { get; set; }
    }
}
