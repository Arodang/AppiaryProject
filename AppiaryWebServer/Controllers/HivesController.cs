using Newtonsoft.Json;
using AppiaryWebServer.Models;
using AppiaryWebServer.Services;
using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace AppiaryWebServer.Controllers
{
    [RoutePrefix("api/hives")]
    public class HivesController : ApiController
    {
        HivesService hivesService = new HivesService();

        public HivesController() { }

        // PUT api/hives/create
        [HttpPut]
        [Route("create")]
        public HttpResponseMessage Create([FromBody]HiveResponse hive)
        {
            var response = new HttpResponseMessage();
            try
            {
                var hiveId = SerializeObject(hivesService.CreateHive(hive));
                response.Content = new StringContent(hiveId, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/hives/edit
        [HttpPost]
        [Route("edit")]
        public HttpResponseMessage Edit([FromBody]HiveResponse hive)
        {
            var response = new HttpResponseMessage();
            try
            {
                var hiveId = SerializeObject(hivesService.EditHive(hive));
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //DELETE api/hives/delete
        [HttpDelete]
        [Route("delete")]
        public HttpResponseMessage Delete([FromBody]HiveResponse hive)
        {
            var response = new HttpResponseMessage();
            try
            {
                var success = SerializeObject(hivesService.DeleteHive(hive));
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/hives/get
        [HttpPost]
        [Route("get")]
        public HttpResponseMessage Get([FromBody]HiveResponse hive)
        {
            var response = new HttpResponseMessage();
            try
            {
                var hiveResponse = SerializeObject(hivesService.GetHiveById(hive));
                response.Content = new StringContent(hiveResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/hives/getall
        [HttpPost]
        [Route("getall")]
        public HttpResponseMessage GetAll([FromBody]HiveResponse hive)
        {
            var response = new HttpResponseMessage();
            try
            {
                var hiveResponse = SerializeObject(hivesService.GetAllHives(hive));
                response.Content = new StringContent(hiveResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
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