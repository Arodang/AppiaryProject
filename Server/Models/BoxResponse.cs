using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Server.Models
{
    public class BoxResponse : BaseResponse
    {
        public string BoxId { get; set; }

        public string Name { get; set; }

        public string BoxType { get; set; }

        public int? Position { get; set; }

        public int? NumberOfFramesCanFit { get; set; }

        public List<FrameResponse> Frames { get; set; }
    }
}