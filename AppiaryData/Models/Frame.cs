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

        public FrameSide Side1 { get; set; }

        public FrameSide Side2 { get; set; }
    }

    public struct FrameSide
    {
        public enum NumberOfBeesEnum { High, Medium, Low, None }

        public enum AmountOfHoneyEnum { High, Medium, Low, None }


        public bool IsBuiltOut { get; set; }

        public bool IsHaveHoney { get; set; }

        public bool IsHaveNectar {get; set;}

        public bool IsHavePollen { get; set; }

        public bool IsHaveQueenCell { get; set; }

        public bool IsHaveCappedQueenCell { get; set; }

        public bool IsHaveLarvae { get; set; }

        public bool IsHaveEggs { get; set; }

        public bool IsHaveCappedBrood { get; set; }

        public bool IsHaveDroneBrood { get; set; }

        public bool IsHaveQueen { get; set; }

        public bool IsHaveSupercedure { get; set; }

        public NumberOfBeesEnum NumberOfBees { get; set; }

        public AmountOfHoneyEnum AmountOfHoney { get; set; }
    }
}
