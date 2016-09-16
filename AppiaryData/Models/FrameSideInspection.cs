using System;
using System.ComponentModel.DataAnnotations;

namespace AppiaryData.Models
{
    public class FrameSideInspection : BaseModel
    {
        [Key, Required]
        public int FrameSideInspectionId { get; set; }

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
