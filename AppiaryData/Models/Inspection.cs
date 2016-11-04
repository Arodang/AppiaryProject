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

        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid InspectionId { get; set; }

        public Hive Hive { get; set; }

        public DateTime DateTimeOfInspection { get; set; }

        public int Temperature { get; set; }

        public AmountQualifiersEnum TrafficAtEntrance { get; set; }

        public List<WeatherEnum> Weather { get; set; }

        public string Purpose { get; set; }

        public List<BoxInspection> BoxInspections { get; set; }

        public InspectionActions Actions { get; set; }

        public InspectionConclusion Conclusion { get; set; }

    }
}
