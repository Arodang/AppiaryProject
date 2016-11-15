using AppiaryData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Server.Services
{
    public class InspectionService
    {
        AppiaryData.Context.DatabaseContext db = new AppiaryData.Context.DatabaseContext();

        internal string CreateInspection(InspectionResponse inspection)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(inspection.UserId) && u.AccessToken == inspection.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                if (string.IsNullOrEmpty(inspection.inspectionStart.hiveId))
                {
                    throw new Exception("Invalid HiveId");
                }

                var i = CreateInspectionStart(inspection.inspectionStart, inspection.UserId);
                i.BoxInspections = CreateBoxInspections(inspection.boxInspections, inspection.UserId);
                i.Actions = CreateInspectionActions(inspection.inspectionActions, inspection.UserId);
                i.Conclusion = CreateInspectionConclusion(inspection.inspectionConclusion, inspection.UserId);


                user.Inspections.Add(i);
                db.SaveChanges();

                var id = i.InspectionId;

                return id.ToString();

            }
            catch (Exception e)
            {
                throw new Exception("Unable to create inspection: " + e.Message);
            }
        }

        private List<AppiaryData.Models.BoxInspection> CreateBoxInspections(List<BoxInspection> boxInspections, string userId)
        {
            var boxes = new List<AppiaryData.Models.BoxInspection>();

            foreach(var b in boxInspections)
            {
                BaseModel.AmountQualifiersEnum beesAmount;
                if (string.IsNullOrWhiteSpace(b.bees))
                {
                    beesAmount = BaseModel.AmountQualifiersEnum.NA;
                }
                else
                {
                    beesAmount = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), b.bees);
                }

                if(string.IsNullOrWhiteSpace(b.boxId))
                {
                    throw new Exception("Invalid box id on inspection. BoxId: " + b.boxId);
                }

                var box = db.Boxes.FirstOrDefault(m => m.BoxId == new Guid(b.boxId));

                if (box == null)
                {
                    throw new Exception("Invalid box id on inspection. BoxId: " + b.boxId);
                }

                BaseModel.AmountQualifiersEnum honeyAmount;
                if (string.IsNullOrWhiteSpace(b.honeyAmount))
                {
                    honeyAmount = BaseModel.AmountQualifiersEnum.NA;
                }
                else
                {
                    honeyAmount = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), b.honeyAmount);
                }

                var boxInspection = new AppiaryData.Models.BoxInspection()
                {
                    BeesAmount = beesAmount,
                    Box = box,
                    CappedBrood = b.cappedBrood,
                    CappedQueen = b.cappedQueen,
                    CreatedBy = userId,
                    CreatedDateTime = DateTime.Now,
                    DroneBrood = b.droneBrood,
                    Eggs = b.eggs,
                    Honey = b.honey,
                    HoneyAmount = honeyAmount,
                    IsBuiltOut = b.isBuiltOut,
                    Larva = b.larva,
                    LastModifiedDateTime = DateTime.Now,
                    Nectar = b.Nectar,
                    Pollen = b.pollen,
                    Queen = b.queen,
                    QueenCup = b.queenCup,
                    SupercedureCell = b.supercedureCell

                };

                boxes.Add(boxInspection);
            }

            return boxes;
        }

        private AppiaryData.Models.Inspection CreateInspectionStart(InspectionStart start, string userId)
        {
            var hive = db.Hives.FirstOrDefault(h => h.HiveId == new Guid(start.hiveId));

            if(hive == null)
            {
                throw new Exception("Invalid HiveId " + start.hiveId + ", hive not found.");
            }

            BaseModel.AmountQualifiersEnum traffic;
            traffic = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), start.traffic);

            List<Inspection.WeatherEnum> weather = new List<Inspection.WeatherEnum>();
            var w = start.weather;
            if (w.cloudy)
            {
                weather.Add(Inspection.WeatherEnum.Cloudy);
            }
            if (w.dry)
            {
                weather.Add(Inspection.WeatherEnum.Dry);
            }
            if (w.humid)
            {
                weather.Add(Inspection.WeatherEnum.Humid);
            }
            if (w.partlyCloudy)
            {
                weather.Add(Inspection.WeatherEnum.PartlyCloudy);
            }
            if (w.rain)
            {
                weather.Add(Inspection.WeatherEnum.Rain);
            }
            if (w.slightBreeze)
            {
                weather.Add(Inspection.WeatherEnum.SlightBreeze);
            }
            if (w.still)
            {
                weather.Add(Inspection.WeatherEnum.Still);
            }
            if (w.sunny)
            {
                weather.Add(Inspection.WeatherEnum.Sunny);
            }
            if (w.windy)
            {
                weather.Add(Inspection.WeatherEnum.Windy);
            }

            var inspection = new Inspection()
            {
                CreatedBy = userId,
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Hive = hive,
                DateTimeOfInspection = start.datetimeValue,
                Purpose = start.purpose,
                Temperature = int.Parse(start.temperature),
                TrafficAtEntrance = traffic,
                Weather = weather
            };



            return inspection;
        }

        private AppiaryData.Models.InspectionActions CreateInspectionActions(InspectionActions actions, string userId)
        {
            var returnActions = new AppiaryData.Models.InspectionActions()
            {
                AddBoxes = actions.addBoxes,
                AddExcluder = actions.addExcluder,
                AddFeeder = actions.addFeeder,
                AddOtherEquipment = actions.addOtherEquipment,
                AddOtherEquipmentDetails = actions.addOtherEquipmentDetails,
                Feed = actions.feed,
                FeedOther = actions.feedOther,
                FeedPollenPatty = actions.feedPollenPatty,
                FeedSugarwater = actions.feedSugarwater,
                HiveManagement = actions.hiveManagement,
                HiveManagementDetails = actions.hiveManagementDetails,
                MiteCount = actions.miteCount,
                MiteCountAmount = actions.miteCountAmount,
                MiteCountMethod = actions.miteCountMethod,
                OtherActions = actions.otherActions,
                PestManagement = actions.pestManagement,
                PestManagementDetails = actions.pestManagementDetails,
                RefillFeeder = actions.refillFeeder,
                Requeen = actions.requeen,
                Treatment = actions.treatment,
                TreatmentDetails = actions.treatmentDetails,
                CreatedBy = userId,
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now
            };

            return returnActions;
        }

        private AppiaryData.Models.InspectionConclusion CreateInspectionConclusion(InspectionConclusion conclusion, string userId)
        {
            BaseModel.AmountQualifiersEnum broodChamberPopulation;
            if (string.IsNullOrWhiteSpace(conclusion.broodChamberPopulation))
            {
                broodChamberPopulation = BaseModel.AmountQualifiersEnum.NA;
            }
            else
            {
                broodChamberPopulation = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), conclusion.broodChamberPopulation);
            }

            AppiaryData.Models.InspectionConclusion.BroodPatternEnum broodPattern;
            if(string.IsNullOrWhiteSpace(conclusion.broodPattern))
            {
                broodPattern = AppiaryData.Models.InspectionConclusion.BroodPatternEnum.None;
            }
            else
            {
                broodPattern = (AppiaryData.Models.InspectionConclusion.BroodPatternEnum)Enum.Parse(typeof(AppiaryData.Models.InspectionConclusion.BroodPatternEnum), conclusion.broodPattern);
            }

            List<AppiaryData.Models.InspectionConclusion.DiseaseEnum> diseases = new List<AppiaryData.Models.InspectionConclusion.DiseaseEnum>();
            foreach (var d in conclusion.diseases)
            {
                var stripped = d.Replace(" ", "");
                if (!string.IsNullOrWhiteSpace(stripped))
                {
                    diseases.Add((AppiaryData.Models.InspectionConclusion.DiseaseEnum)Enum.Parse(typeof(AppiaryData.Models.InspectionConclusion.DiseaseEnum), stripped, true));
                }
            }

            BaseModel.AmountQualifiersEnum droneCount;
            if(conclusion.droneCount == "Low (<30)")
            {
                droneCount = BaseModel.AmountQualifiersEnum.Low;
            }
            else if (conclusion.droneCount == "Average (30-100)")
            {
                droneCount = BaseModel.AmountQualifiersEnum.Medium;
            }
            else if(conclusion.droneCount == "High (>100)")
            {
                droneCount = BaseModel.AmountQualifiersEnum.High;
            }
            else
            {
                droneCount = BaseModel.AmountQualifiersEnum.NA;
            }

            BaseModel.AmountQualifiersEnum droneAmount;
            if (string.IsNullOrWhiteSpace(conclusion.dronesAmount))
            {
                droneAmount = BaseModel.AmountQualifiersEnum.NA;
            }
            else
            {
                droneAmount = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), conclusion.dronesAmount);
            }

            BaseModel.AmountQualifiersEnum eggsAmount;
            if (string.IsNullOrWhiteSpace(conclusion.eggsAmount))
            {
                eggsAmount = BaseModel.AmountQualifiersEnum.NA;
            }
            else
            {
                eggsAmount = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), conclusion.eggsAmount);
            }

            List<AppiaryData.Models.InspectionConclusion.HiveConditionEnum> hiveCondition = new List<AppiaryData.Models.InspectionConclusion.HiveConditionEnum>();
            foreach (var h in conclusion.hiveCondition)
            {
                var stripped = h.Replace(" ", "");
                if (!string.IsNullOrWhiteSpace(stripped)) {
                    hiveCondition.Add((AppiaryData.Models.InspectionConclusion.HiveConditionEnum)Enum.Parse(typeof(AppiaryData.Models.InspectionConclusion.HiveConditionEnum), stripped, true));
                }
            }

            BaseModel.AmountQualifiersEnum honeyPopulation;
            if (string.IsNullOrWhiteSpace(conclusion.honeyBoxPopulation))
            {
                honeyPopulation = BaseModel.AmountQualifiersEnum.NA;
            }
            else
            {
                honeyPopulation = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), conclusion.honeyBoxPopulation);
            }

            List<AppiaryData.Models.InspectionConclusion.PestsPresentEnum> pestsPresent = new List<AppiaryData.Models.InspectionConclusion.PestsPresentEnum>();
            foreach (var p in conclusion.pests)
            {
                var stripped = p.Replace(" ", "");
                if (!string.IsNullOrWhiteSpace(stripped))
                {
                    pestsPresent.Add((AppiaryData.Models.InspectionConclusion.PestsPresentEnum)Enum.Parse(typeof(AppiaryData.Models.InspectionConclusion.PestsPresentEnum), stripped, true));
                }
            }

            int queenAge;
            int.TryParse(conclusion.queenAge, out queenAge);

            BaseModel.AmountQualifiersEnum resourcesHoney;
            if (string.IsNullOrWhiteSpace(conclusion.honeyResources))
            {
                resourcesHoney = BaseModel.AmountQualifiersEnum.NA;
            }
            else
            {
                resourcesHoney = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), conclusion.honeyResources);
            }

            BaseModel.AmountQualifiersEnum resourcesNectar;
            if (string.IsNullOrWhiteSpace(conclusion.nectarResources))
            {
                resourcesNectar = BaseModel.AmountQualifiersEnum.NA;
            }
            else
            {
                resourcesNectar = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), conclusion.nectarResources);
            }

            BaseModel.AmountQualifiersEnum resourcesPollen;
            if (string.IsNullOrWhiteSpace(conclusion.pollenResources))
            {
                resourcesPollen = BaseModel.AmountQualifiersEnum.NA;
            }
            else
            {
                resourcesPollen = (BaseModel.AmountQualifiersEnum)Enum.Parse(typeof(BaseModel.AmountQualifiersEnum), conclusion.pollenResources);
            }

            AppiaryData.Models.InspectionConclusion.TempermentEnum temperment;
            if (string.IsNullOrWhiteSpace(conclusion.temperment))
            {
                temperment = AppiaryData.Models.InspectionConclusion.TempermentEnum.NA;
            }
            else
            {
                temperment = (AppiaryData.Models.InspectionConclusion.TempermentEnum)Enum.Parse(typeof(AppiaryData.Models.InspectionConclusion.TempermentEnum), conclusion.temperment);
            }

            var c = new AppiaryData.Models.InspectionConclusion()
            {
                Bearding = conclusion.bearding,
                BroodChamberPopulation = broodChamberPopulation,
                BroodPattern = broodPattern,
                CreatedBy = userId,
                CreatedDateTime = DateTime.Now,
                Diseases = diseases,
                DroneCount = droneCount,
                DronesAmount = droneAmount,
                EggsAmount = eggsAmount,
                HiveCondition = hiveCondition,
                HoneyPopulation = honeyPopulation,
                LastModifiedDateTime = DateTime.Now,
                PestsPresent = pestsPresent,
                PollenIncoming = conclusion.pollenIncoming,
                Queen = conclusion.queen,
                QueenAge =queenAge,
                QueenCells = conclusion.queenCells,
                ResourcesHoney = resourcesHoney,
                ResourcesNectar = resourcesNectar,
                ResourcesPollen = resourcesPollen,
                Temperment = temperment
            };

            return c;
        }
    }
}