using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class InspectionConclusion : BaseModel
    {
        public enum TempermentEnum { Calm, Nervous, Aggressive }

        public enum PestsPresentEnum { Ants, Mites, Mice, WaxMoths, HiveBeetles, Other, None }

        public enum BroodPatternEnum { Uniform, Random, VerySpotty, None }

        public enum ObservationsEnum { Bearding, Queen, QueenCells, Eggs, Drones, PollenIncoming }

        public enum DiseaseEnum { Chalkbrood, DeformedWing, AFB, EFB, Other, None }

        public enum HiveConditionEnum { Normal, BraceComb, ExcessivePropolis, NormalOdor, FoulOdor, EquipmentDamage }


        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid InspectionConclusionId { get; set; }

        public TempermentEnum Temperment { get; set; }

        public AmountQualifiersEnum DroneCount { get; set; }

        public AmountQualifiersEnum HoneyPopulation { get; set; }

        public AmountQualifiersEnum BroodChamberPopulation { get; set; }

        public List<PestsPresentEnum> PestsPresent { get; set; }

        public AmountQualifiersEnum ResourcesHoney { get; set; }

        public AmountQualifiersEnum ResourcesNectar { get; set; }

        public AmountQualifiersEnum ResourcesPollen { get; set; }

        public BroodPatternEnum BroodPattern { get; set; }

        public int QueenAge { get; set; }

        public bool Bearding { get; set; }

        public AmountQualifiersEnum EggsAmount { get; set; }

        public bool Queen { get; set; }

        public bool QueenCells { get; set; }

        public AmountQualifiersEnum DronesAmount { get; set; }

        public bool PollenIncoming { get; set; }

        public List<DiseaseEnum> Diseases { get; set; }

        public List<HiveConditionEnum> HiveCondition { get; set; }

        public string Notes { get; set; }
    }
}
