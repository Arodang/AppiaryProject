using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Server.Models
{
    public class BaseResponse
    {
        public string UserId { get; set; }

        public string AccessToken { get; set; }

        public bool? IsOnWifi { get; set; }
    }
}