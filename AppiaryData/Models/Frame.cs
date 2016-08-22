using System;
using System.ComponentModel.DataAnnotations;

namespace AppiaryData.Models
{
    class Frame : BaseModel
    {
        [Key, Required]
        public int BoxId { get; set; }

        public int Position { get; set; }

        public bool IsHaveFoundation { get; set; }

        public bool IsFoundationPlastic { get; set; }

        public FrameSideInspection Side1 { get; set; }

        public FrameSideInspection Side2 { get; set; }
    }
}
