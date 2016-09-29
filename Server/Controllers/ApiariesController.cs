using AppiaryData.Models;
using Server.Models;
using Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Server.Controllers
{
    [RoutePrefix("api/apiaries")]
    public class ApiariesController : ApiController
    {
        ApiariesService apiariesService = new ApiariesService();

        public ApiariesController() { }

        // PUT api/apiaries/create
        [HttpPut]
        [Route("create")]
        public HttpResponseMessage Create([FromBody]ApiaryResponse apiary)
        {
            var response = new HttpResponseMessage();
            try
            {
                var apiaryId = Newtonsoft.Json.JsonConvert.SerializeObject(apiariesService.CreateApiary(apiary));
                response.Content = new StringContent(apiaryId, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }
    }
}