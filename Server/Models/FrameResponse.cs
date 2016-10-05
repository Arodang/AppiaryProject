using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Server.Models
{
    public class FrameResponse : BaseResponse
    {
        public string FrameId { get; set; }

        public int? Position { get; set; }

        public bool? IsHaveFoundation { get; set; }

        public bool? IsFoundationPlastic { get; set; }
    }
}