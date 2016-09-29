using AppiaryData.Models;
using Server.Models;
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
                db.Apiaries.Add(a);
                db.SaveChanges();

                var id = a.ApiaryId;

                return id.ToString();

            }
            catch (Exception e)
            {
                throw new Exception("Unable to create apiary: " + e.Message);
            }
        }
    }
}
