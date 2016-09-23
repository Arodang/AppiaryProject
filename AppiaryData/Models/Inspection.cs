using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class Inspection : BaseModel
    {
        public enum WeatherEnum { Sunny, Cloudy, PartlyCloudy, Rain, Humid, Dry, Still, SlightBreeze, Windy }

        public enum EntranceOpeningEnum { Small, Medium, Large, Open }

        public enum TempermentEnum { Calm, Nervous, Aggressive }

        public enum PestsPresentEnum { Ants, Mites, Mice, WaxMoths, HiveBeetles, Other, None }

        public enum BroodPatternEnum { Uniform, Random, VerySpotty, None }

        public enum ObservationsEnum { Bearding, Queen, QueenCells, Eggs, Drones, PollenIncoming }

        public enum DiseaseEnum { Chalkbrood, DeformedWing, AFB, EFB, Other, None }

        public enum HiveConditionEnum { Normal, BraceComb, ExcessivePropolis, NormalOdor, FoulOdor, EquipmentDamage }

        public enum ColonyAssessmentEnum { Strong, Moderate, Weak, Dead }



        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid InspectionId { get; set; }

        public DateTime DateTimeOfInspection { get; set; }

        public int Temperature { get; set; }

        public bool IsTempFahrenheit { get; set; }

        public Hive Hive { get; set; }

        public AmountQualifiersEnum TrafficAtEntrance { get; set; }

        public List<WeatherEnum> Weather { get; set; }

        public int NumberOfDeeps { get; set; }

        public int NumberOfMediums { get; set; }

        public int NumberOfShallows { get; set; }

        public EntranceOpeningEnum EntranceOpening { get; set; }

        public bool IsBottomBoardSolid { get; set; }

        public bool IsHaveFeeder { get; set; }

        public string FeederDetails { get; set; }

        public TempermentEnum Temperment { get; set; }

        public AmountQualifiersEnum DroneCount { get; set; }

        public AmountQualifiersEnum Population { get; set; }

        public AmountQualifiersEnum BroodChamberPopulation { get; set; }

        public PestsPresentEnum PestsPresent { get; set; }

        public string PestsPresentOther { get; set; }

        public AmountQualifiersEnum ResourcesHoney { get; set; }

        public AmountQualifiersEnum ResourcesNectar { get; set; }

        public AmountQualifiersEnum ResourcesPollen { get; set; }

        public BroodPatternEnum BroodPattern { get; set; }

        public ObservationsEnum Observations { get; set; }

        public AmountQualifiersEnum ObservationsEggs { get; set; }

        public AmountQualifiersEnum ObservationsDrones { get; set; }

        public DiseaseEnum Disease { get; set; }

        public string DiseaseOther { get; set; }

        public HiveConditionEnum HiveCondition { get; set; }

        public string InspectionObjective { get; set; }

        public InspectionTakenAction ActionsTaken { get; set; }

        public List<Note> InspectionNotes { get; set; }

        public ColonyAssessmentEnum ColonyAssessment { get; set; }

    }
}
