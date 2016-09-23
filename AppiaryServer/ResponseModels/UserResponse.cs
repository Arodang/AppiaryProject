using AppiaryData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppiaryServer.ResponseModels
{
    public class UserResponse
    {
        public string UserId { get; set; }

        public string AccessToken { get; set; }
    }
}
