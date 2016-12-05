using AppiaryData.Models;
using AppiaryWebServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AppiaryWebServer.Services
{
    public class FramesService
    {
        AppiaryData.Context.DatabaseContext db = new AppiaryData.Context.DatabaseContext();

        internal string CreateFrame(FrameResponse frame)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(frame.UserId) && u.AccessToken == frame.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                if(string.IsNullOrEmpty(frame.BoxId))
                {
                    throw new Exception("No box ID");
                }

                var box = user.Apiaries.SelectMany(i => i.Hives).SelectMany(i => i.Boxes).FirstOrDefault(a => a.BoxId == new Guid(frame.BoxId));

                var f = new Frame()
                {
                    CreatedBy = frame.UserId,
                    CreatedDateTime = DateTime.Now,
                    LastModifiedDateTime = DateTime.Now,
                    Position = frame.Position ?? -1,
                    IsHaveFoundation = frame.IsHaveFoundation ?? false,
                    IsFoundationPlastic = frame.IsFoundationPlastic ?? false,
                };

                box.Frames.Add(f);
                db.SaveChanges();

                var id = f.FrameId;

                return id.ToString();

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception creating frame: " + e.StackTrace);
                throw new Exception("Unable to create frame: " + e.Message);
            }
        }

        internal bool EditFrame(FrameResponse frame)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(frame.UserId) && u.AccessToken == frame.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var box = user.Apiaries.SelectMany(i => i.Hives).SelectMany(i => i.Boxes).FirstOrDefault(a => a.BoxId == new Guid(frame.BoxId));

                var f = box.Frames.FirstOrDefault(x => x.FrameId == new Guid(frame.FrameId));

                f.LastModifiedDateTime = DateTime.Now;

                //Fields that get passed from UI may be empty, so check they aren't empty and have changed before assigning
                var position = frame.Position ?? -1;
                if (position != -1 && position != f.Position)
                {
                    f.Position = position;
                }

                var isFoundation = frame.IsHaveFoundation ?? false;
                if (frame.IsHaveFoundation != null && isFoundation != f.IsHaveFoundation)
                {
                    f.IsHaveFoundation = isFoundation;
                }

                var isPlasticFoundation = frame.IsFoundationPlastic ?? false;
                if (frame.IsFoundationPlastic != null && isPlasticFoundation != f.IsFoundationPlastic)
                {
                    f.IsFoundationPlastic = isPlasticFoundation;
                }

                return db.SaveChanges() >= 0;

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception editing frame: " + e.StackTrace);
                throw new Exception("Unable to edit frame: " + e.Message);
            }
        }

        internal bool DeleteFrame(FrameResponse frame)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(frame.UserId) && u.AccessToken == frame.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var box = user.Apiaries.SelectMany(i => i.Hives).SelectMany(i => i.Boxes).FirstOrDefault(a => a.BoxId == new Guid(frame.BoxId));

                var f = box.Frames.FirstOrDefault(x => x.FrameId == new Guid(frame.FrameId));

                db.Frames.Remove(f);

                return db.SaveChanges() >= 0;

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception deleting frame: " + e.StackTrace);
                throw new Exception("Unable to delete frame: " + e.Message);
            }
        }

        internal FrameResponse GetFrameById(FrameResponse frame)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(frame.UserId) && u.AccessToken == frame.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                var f = user.Apiaries.SelectMany(x => x.Hives).SelectMany(x => x.Boxes).SelectMany(z => z.Frames).FirstOrDefault(x => x.FrameId == new Guid(frame.FrameId));

                frame = ConvertService.ConvertFrameToResponse(f);
                return frame;

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception getting frame: " + e.StackTrace);
                throw new Exception("Unable to get frame: " + e.Message);
            }
        }

        internal List<FrameResponse> GetAllFrames(FrameResponse frame)
        {
            try
            {
                var user = db.Users.FirstOrDefault(u => u.UserId == new Guid(frame.UserId) && u.AccessToken == frame.AccessToken);

                if (user == null)
                {
                    throw new Exception("Invalid User or Access Token");
                }

                List<Frame> f;

                if (string.IsNullOrEmpty(frame.FrameId))
                {
                    f = user.Apiaries.SelectMany(x => x.Hives).SelectMany(x => x.Boxes).SelectMany(z => z.Frames).ToList();
                }
                else
                {
                    var box = user.Apiaries.SelectMany(x => x.Hives).SelectMany(x => x.Boxes).FirstOrDefault(a => a.BoxId == new Guid(frame.FrameId));

                    f = box.Frames.ToList();
                }

                var response = ConvertService.ConvertFramesToResponses(f);
                return response;

            }
            catch (Exception e)
            {
                Console.WriteLine("Exception getting all frames: " + e.StackTrace);
                throw new Exception("Unable to get all frames: " + e.Message);
            }
        }
    }
}
