using Newtonsoft.Json;
using Server.Models;
using Server.Services;
using System;
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
                var apiaryId = SerializeObject(apiariesService.CreateApiary(apiary));
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

        //POST api/apiaries/edit
        [HttpPost]
        [Route("edit")]
        public HttpResponseMessage Edit([FromBody]ApiaryResponse apiary)
        {
            var response = new HttpResponseMessage();
            try
            {
                var apiaryId = SerializeObject(apiariesService.EditApiary(apiary));
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //DELETE api/apiaries/delete
        [HttpDelete]
        [Route("delete")]
        public HttpResponseMessage Delete([FromBody]ApiaryResponse apiary)
        {
            var response = new HttpResponseMessage();
            try
            {
                var success = SerializeObject(apiariesService.DeleteApiary(apiary));
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/apiaries/get
        [HttpPost]
        [Route("get")]
        public HttpResponseMessage Get([FromBody]ApiaryResponse apiary)
        {
            var response = new HttpResponseMessage();
            try
            {
                var a = SerializeObject(apiariesService.GetApiaryById(apiary));
                response.Content = new StringContent(a, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/apiaries/getall
        [HttpPost]
        [Route("getall")]
        public HttpResponseMessage GetAll([FromBody]ApiaryResponse apiary)
        {
            var response = new HttpResponseMessage();
            try
            {
                var a = SerializeObject(apiariesService.GetAllApiaries(apiary));
                response.Content = new StringContent(a, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }


        private string SerializeObject(object value)
        {
            return JsonConvert.SerializeObject(value,
                Formatting.None,
                new JsonSerializerSettings {
                    NullValueHandling = NullValueHandling.Ignore
            });
        }
    }
}