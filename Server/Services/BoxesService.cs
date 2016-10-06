using AppiaryData.Models;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Server.Services
{
    public class BoxesService
    {
        AppiaryData.Context.DatabaseContext db = new AppiaryData.Context.DatabaseContext();

        internal string CreateBox(BoxResponse box)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(box.UserId) && u.AccessToken == box.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                if(string.IsNullOrEmpty(box.HiveId))
                {
                    throw new Exception("No hive ID");
                }

                var hive = user.Apiaries.SelectMany(i => i.Hives).FirstOrDefault(a => a.HiveId == new Guid(box.HiveId));

                var b = new Box()
                {
                    CreatedBy = box.UserId,
                    CreatedDateTime = DateTime.Now,
                    LastModifiedDateTime = DateTime.Now,
                    Name = box.Name,
                    BoxType = (Box.BoxTypeEnum)Enum.Parse(typeof(Box.BoxTypeEnum), box.BoxType, true),
                    Position = box.Position ?? -1,
                    NumberOfFramesCanFit = box.NumberOfFramesCanFit ?? 10
                };

                hive.Boxes.Add(b);
                db.SaveChanges();

                var id = b.BoxId;

                return id.ToString();

            }
            catch (Exception e)
            {
                throw new Exception("Unable to create box: " + e.Message);
            }
        }

        internal bool EditBox(BoxResponse box)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(box.UserId) && u.AccessToken == box.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var hive = user.Apiaries.SelectMany(i => i.Hives).FirstOrDefault(a => a.HiveId == new Guid(box.HiveId));

                var b = hive.Boxes.FirstOrDefault(x => x.BoxId == new Guid(box.BoxId));

                b.LastModifiedDateTime = DateTime.Now;

                //Fields that get passed from UI may be empty, so check they aren't empty and have changed before assigning
                if (!string.IsNullOrEmpty(box.BoxType))
                {
                    var type = (Box.BoxTypeEnum)Enum.Parse(typeof(Box.BoxTypeEnum), box.BoxType, true);
                    if (type != b.BoxType)
                    {
                        b.BoxType = type;
                    }
                }

                var position = box.Position ?? -1;
                if (position != -1 && position != b.Position)
                {
                    b.Position = position;
                }

                var framesCanFit = box.NumberOfFramesCanFit ?? -1;
                if (framesCanFit != -1 && framesCanFit != b.NumberOfFramesCanFit)
                {
                    b.NumberOfFramesCanFit = framesCanFit;
                }

                if (!string.IsNullOrEmpty(box.Name) && box.Name != b.Name)
                {
                    b.Name = box.Name;
                }



                return db.SaveChanges() >= 0;

            }
            catch (Exception e)
            {
                throw new Exception("Unable to edit box: " + e.Message);
            }
        }

        internal bool DeleteBox(BoxResponse box)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(box.UserId) && u.AccessToken == box.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var hive = user.Apiaries.SelectMany(i => i.Hives).FirstOrDefault(a => a.HiveId == new Guid(box.HiveId));

                var b = hive.Boxes.FirstOrDefault(x => x.BoxId == new Guid(box.BoxId));

                db.Boxes.Remove(b);

                return db.SaveChanges() >= 0;

            }
            catch (Exception e)
            {
                throw new Exception("Unable to edit box: " + e.Message);
            }
        }

        internal BoxResponse GetBoxById(BoxResponse box)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(box.UserId) && u.AccessToken == box.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var b = user.Apiaries.SelectMany(x => x.Hives).SelectMany(z => z.Boxes).FirstOrDefault(x => x.BoxId == new Guid(box.BoxId));

                box = ConvertService.ConvertBoxToResponse(b, box.IsOnWifi ?? false);
                return box;

            }
            catch (Exception e)
            {
                throw new Exception("Unable to get box: " + e.Message);
            }
        }

        internal List<BoxResponse> GetAllBoxes(BoxResponse box)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(box.UserId) && u.AccessToken == box.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                List<Box> h;

                if (string.IsNullOrEmpty(box.HiveId))
                {
                    h = user.Apiaries.SelectMany(x => x.Hives).SelectMany(z => z.Boxes).ToList();
                }
                else
                {
                    var hive = user.Apiaries.SelectMany(x => x.Hives).FirstOrDefault(a => a.HiveId == new Guid(box.HiveId));

                    h = hive.Boxes.ToList();
                }

                var response = ConvertService.ConvertBoxesToResponses(h, box.IsOnWifi ?? false);
                return response;

            }
            catch (Exception e)
            {
                throw new Exception("Unable to get all boxes: " + e.Message);
            }
        }
    }
}
