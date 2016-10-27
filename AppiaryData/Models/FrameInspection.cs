using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppiaryData.Models
{
    public class FrameInspection : BaseModel
    {
        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid FrameInspectionId { get; set; }

        public Frame Frame { get; set; }

        public FrameSideInspection Side1 { get; set; }

        public FrameSideInspection Side2 { get; set; }

        public struct FrameSideInspection
        {
            public bool IsBuiltOut { get; set; }

            public bool IsHaveHoney { get; set; }

            public bool IsHaveNectar { get; set; }

            public bool IsHavePollen { get; set; }

            public bool IsHaveQueenCell { get; set; }

            public bool IsHaveCappedQueenCell { get; set; }

            public bool IsHaveLarvae { get; set; }

            public bool IsHaveEggs { get; set; }

            public bool IsHaveCappedBrood { get; set; }

            public bool IsHaveDroneBrood { get; set; }

            public bool IsHaveQueen { get; set; }

            public bool IsHaveSupercedure { get; set; }

            public AmountQualifiersEnum NumberOfBees { get; set; }

            public AmountQualifiersEnum AmountOfHoney { get; set; }
        }
    }

}
