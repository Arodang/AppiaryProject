using AppiaryData.Models;
using AppiaryWebServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AppiaryWebServer.Services
{
    public class HivesService
    {
        AppiaryData.Context.DatabaseContext db = new AppiaryData.Context.DatabaseContext();

        internal string CreateHive(HiveResponse hive)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(hive.UserId) && u.AccessToken == hive.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                if(string.IsNullOrEmpty(hive.ApiaryId))
                {
                    throw new Exception("No apiary ID");
                }

                var apiary = user.Apiaries.FirstOrDefault(a => a.ApiaryId == new Guid(hive.ApiaryId));

                var h = new Hive()
                {
                    CreatedBy = hive.UserId,
                    CreatedDateTime = DateTime.Now,
                    LastModifiedDateTime = DateTime.Now,
                    Name = hive.Name,
                    HiveType = (Hive.HiveTypeEnum)Enum.Parse(typeof(Hive.HiveTypeEnum), hive.HiveType, true),
                    Position = hive.Position ?? -1,
                };

                apiary.Hives.Add(h);
                db.SaveChanges();

                var id = h.HiveId;

                return id.ToString();

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception creating hive: " + e.StackTrace);
                throw new Exception("Unable to create hive: " + e.Message);
            }
        }

        internal bool EditHive(HiveResponse hive)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(hive.UserId) && u.AccessToken == hive.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var apiary = user.Apiaries.FirstOrDefault(a => a.ApiaryId == new Guid(hive.ApiaryId));

                var h = apiary.Hives.FirstOrDefault(x => x.HiveId == new Guid(hive.HiveId));

                h.LastModifiedDateTime = DateTime.Now;

                //Fields that get passed from UI may be empty, so check they aren't empty and have changed before assigning
                if (!string.IsNullOrEmpty(hive.HiveType))
                {
                    var type = (Hive.HiveTypeEnum)Enum.Parse(typeof(Hive.HiveTypeEnum), hive.HiveType, true);
                    if (type != h.HiveType)
                    {
                        h.HiveType = type;
                    }
                }

                var position = hive.Position ?? -1;
                if (position != -1 && position != h.Position)
                {
                    h.Position = position;
                }

                if (!string.IsNullOrEmpty(hive.Name) && hive.Name != h.Name)
                {
                    h.Name = hive.Name;
                }

                return db.SaveChanges() >= 0;

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception editing hive: " + e.StackTrace);
                throw new Exception("Unable to edit hive: " + e.Message);
            }
        }

        internal bool DeleteHive(HiveResponse hive)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(hive.UserId) && u.AccessToken == hive.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var apiary = user.Apiaries.FirstOrDefault(a => a.ApiaryId == new Guid(hive.ApiaryId));

                var h = apiary.Hives.FirstOrDefault(x => x.HiveId == new Guid(hive.HiveId));

                db.Hives.Remove(h);

                return db.SaveChanges() >= 0;

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception deleting hive: " + e.StackTrace);
                throw new Exception("Unable to delete hive: " + e.Message);
            }
        }

        internal HiveResponse GetHiveById(HiveResponse hive)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(hive.UserId) && u.AccessToken == hive.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var h = user.Apiaries.SelectMany(x => x.Hives).FirstOrDefault(x => x.HiveId == new Guid(hive.HiveId));

                hive = ConvertService.ConvertHiveToResponse(h, hive.IsOnWifi ?? false);
                return hive;

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception getting hive: " + e.StackTrace);
                throw new Exception("Unable to get hive: " + e.Message);
            }
        }

        internal List<HiveResponse> GetAllHives(HiveResponse hive)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(hive.UserId) && u.AccessToken == hive.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                List<Hive> h;

                if (string.IsNullOrEmpty(hive.ApiaryId))
                {
                    h = user.Apiaries.SelectMany(x => x.Hives).ToList();
                }
                else
                {
                    var apiary = user.Apiaries.FirstOrDefault(a => a.ApiaryId == new Guid(hive.ApiaryId));

                    h = apiary.Hives.ToList();
                }

                var response = ConvertService.ConvertHivesToResponses(h, hive.IsOnWifi ?? false);
                return response;

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception getting all hives: " + e.StackTrace);
                throw new Exception("Unable to get all hives: " + e.Message);
            }
        }
    }
}
