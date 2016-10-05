using AppiaryData.Models;
using Server.Models;
using Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class ApiariesService
    {
        AppiaryData.Context.DatabaseContext db = new AppiaryData.Context.DatabaseContext();

        internal string CreateApiary(ApiaryResponse apiary)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(apiary.UserId) && u.AccessToken == apiary.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var a = new Apiary()
                {
                    CreatedBy = apiary.UserId,
                    CreatedDateTime = DateTime.Now,
                    LastModifiedDateTime = DateTime.Now,
                    Name = apiary.Name,
                    Address = apiary.Address,
                    Description = apiary.Description
                };
                user.Apiaries.Add(a);
                db.SaveChanges();

                var id = a.ApiaryId;

                return id.ToString();

            }
            catch (Exception e)
            {
                throw new Exception("Unable to create apiary: " + e.Message);
            }
        }

        internal bool EditApiary(ApiaryResponse apiary)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(apiary.UserId) && u.AccessToken == apiary.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var a = user.Apiaries.FirstOrDefault(x => x.ApiaryId == new Guid(apiary.ApiaryId));

                a.LastModifiedDateTime = DateTime.Now;

                //Fields that get passed from UI may be empty, so check they aren't empty and have changed before assigning
                if (!string.IsNullOrEmpty(apiary.Address) && apiary.Address != a.Address)
                {
                    a.Address = apiary.Address;
                }
                if (!string.IsNullOrEmpty(apiary.Description) && apiary.Description!= a.Description)
                {
                    a.Description= apiary.Description;
                }
                if (!string.IsNullOrEmpty(apiary.Name) && apiary.Name != a.Name)
                {
                    a.Name = apiary.Name;
                }

                return db.SaveChanges() >= 0;

            }
            catch (Exception e)
            {
                throw new Exception("Unable to edit apiary: " + e.Message);
            }
        }

        internal bool DeleteApiary(ApiaryResponse apiary)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(apiary.UserId) && u.AccessToken == apiary.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var a = user.Apiaries.FirstOrDefault(x => x.ApiaryId == new Guid(apiary.ApiaryId));

                db.Apiaries.Remove(a);

                return db.SaveChanges() >= 0;

            }
            catch (Exception e)
            {
                throw new Exception("Unable to edit apiary: " + e.Message);
            }
        }

        internal ApiaryResponse GetApiaryById(ApiaryResponse apiary)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(apiary.UserId) && u.AccessToken == apiary.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var a = user.Apiaries.FirstOrDefault(x => x.ApiaryId == new Guid(apiary.ApiaryId));

                apiary = ConvertService.ConvertApiaryToResponse(a, apiary.IsOnWifi ?? false);
                return apiary;

            }
            catch (Exception e)
            {
                throw new Exception("Unable to get apiary: " + e.Message);
            }
        }

        internal List<ApiaryResponse> GetAllApiaries(ApiaryResponse apiary)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(apiary.UserId) && u.AccessToken == apiary.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var a = user.Apiaries.ToList();

                var response = ConvertService.ConvertApiariesToResponses(a, apiary.IsOnWifi ?? false);
                return response;

            }
            catch (Exception e)
            {
                throw new Exception("Unable to get all apiaries: " + e.Message);
            }
        }
    }
}
