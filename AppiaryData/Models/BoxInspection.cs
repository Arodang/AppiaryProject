using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppiaryData.Models
{
    public class BoxInspection : BaseModel
    {
        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid BoxInspectionId { get; set; }

        public Box Box { get; set; }

        public AmountQualifiersEnum BeesAmount { get; set; }

        public bool IsBuiltOut { get; set; }

        public bool Honey { get; set; }

        public AmountQualifiersEnum HoneyAmount { get; set; }

        public bool Nectar { get; set; }

        public bool Pollen { get; set; }

        public bool Queen { get; set; }

        public bool Larva { get; set; }

        public bool Eggs { get; set; }

        public bool CappedBrood { get; set; }

        public bool DroneBrood { get; set; }

        public bool QueenCup { get; set; }

        public bool CappedQueen { get; set; }

        public bool SupercedureCell { get; set; }
    }
}