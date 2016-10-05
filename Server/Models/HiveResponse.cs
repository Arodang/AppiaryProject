using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Server.Models
{
    public class HiveResponse : BaseResponse
    {
        public string ApiaryId { get; set; }

        public string HiveId { get; set; }

        public string Name { get; set; }

        public string HiveType { get; set; }

        public int? Position { get; set; }

        public List<BoxResponse> Boxes { get; set; }
    }
}