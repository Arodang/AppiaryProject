using System.Collections.Generic;

namespace AppiaryWebServer.Models
{
    public class ApiaryResponse : BaseResponse
    {
        public string ApiaryId { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public List<HiveResponse> Hives { get; set; }
    }
}