using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Server.Models
{
    public class ApiaryResponse
    {
        public string UserId { get; set; }

        public string AccessToken { get; set; }

        public string ApiaryId { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        //public List<HiveResponse> Hives { get; set; }
    }
}