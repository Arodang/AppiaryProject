using AppiaryData.Models;
using AppiaryWebServer.Models;
using System.Collections.Generic;
using System.Linq;

namespace AppiaryWebServer.Services
{
    public static class ConvertService
    {
        public static FrameResponse ConvertFrameToResponse(Frame f)
        {
            var frame = new FrameResponse();

            frame.FrameId = f.FrameId.ToString();
            frame.Position = f.Position;
            frame.IsHaveFoundation = f.IsHaveFoundation;
            frame.IsFoundationPlastic = f.IsFoundationPlastic;

            return frame;
        }

        public static List<FrameResponse> ConvertFramesToResponses(List<Frame> f)
        {
            var response = new List<FrameResponse>();

            foreach (var i in f)
            {
                var frame = ConvertFrameToResponse(i);

                response.Add(frame);
            }

            return response;
        }

        public static BoxResponse ConvertBoxToResponse(Box b, bool includeChildren)
        {
            var box = new BoxResponse()
            {
                BoxId = b.BoxId.ToString(),
                BoxType = b.BoxType.ToString(),
                Name = b.Name,
                Position = b.Position,
                NumberOfFramesCanFit = b.NumberOfFramesCanFit
            };

            if (includeChildren)
            {
                box.Frames = ConvertFramesToResponses(b.Frames.ToList());
            }

            return box;
        }

        public static List<BoxResponse> ConvertBoxesToResponses(List<Box> b, bool includeChildren)
        {
            var response = new List<BoxResponse>();

            foreach (var i in b)
            {
                var box = ConvertBoxToResponse(i, includeChildren);

                response.Add(box);
            }

            return response;
        }

        public static HiveResponse ConvertHiveToResponse(Hive h, bool includeChildren)
        {
            var hive = new HiveResponse()
            {
                HiveId = h.HiveId.ToString(),
                HiveType = h.HiveType.ToString(),
                Name = h.Name,
                Position = h.Position
            };

            if (includeChildren)
            {
                hive.Boxes = ConvertBoxesToResponses(h.Boxes.ToList(), includeChildren);
            }

            return hive;
        }

        public static List<HiveResponse> ConvertHivesToResponses(List<Hive> h, bool includeChildren)
        {
            var response = new List<HiveResponse>();

            foreach (var i in h)
            {
                var hive = ConvertHiveToResponse(i, includeChildren);

                response.Add(hive);
            }

            return response;
        }

        public static ApiaryResponse ConvertApiaryToResponse(Apiary a, bool includeChildren)
        {
            var apiary = new ApiaryResponse()
            {
                ApiaryId = a.ApiaryId.ToString(),
                Address = a.Address,
                Description = a.Description,
                Name = a.Name
            };

            if (includeChildren)
            {
                apiary.Hives = ConvertHivesToResponses(a.Hives.ToList(), includeChildren);
            }

            return apiary;
        }

        public static List<ApiaryResponse> ConvertApiariesToResponses(List<Apiary> a, bool includeChildren)
        {
            var response = new List<ApiaryResponse>();

            foreach (var i in a)
            {
                var apiary = ConvertApiaryToResponse(i, includeChildren);

                response.Add(apiary);
            }

            return response;
        }

    }
}