using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Server.Models
{
    public class BoxResponse
    {
        public string UserId { get; set; }

        public string AccessToken { get; set; }

        public string BoxId { get; set; }

        public string Name { get; set; }

        public String BoxType { get; set; }

        public int Position { get; set; }

        public int NumberOfFramesCanFit { get; set; }

        public List<FrameResponse> Frames { get; set; }
    }
}