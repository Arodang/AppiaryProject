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
    [RoutePrefix("api/boxes")]
    public class BoxesController : ApiController
    {
        BoxesService boxesService = new BoxesService();

        public BoxesController() { }

        // PUT api/boxes/create
        [HttpPut]
        [Route("create")]
        public HttpResponseMessage Create([FromBody]BoxResponse box)
        {
            var response = new HttpResponseMessage();
            try
            {
                var boxId = SerializeObject(boxesService.CreateBox(box));
                response.Content = new StringContent(boxId, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/boxes/edit
        [HttpPost]
        [Route("edit")]
        public HttpResponseMessage Edit([FromBody]BoxResponse box)
        {
            var response = new HttpResponseMessage();
            try
            {
                var boxId = SerializeObject(boxesService.EditBox(box));
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //DELETE api/boxes/delete
        [HttpDelete]
        [Route("delete")]
        public HttpResponseMessage Delete([FromBody]BoxResponse box)
        {
            var response = new HttpResponseMessage();
            try
            {
                var success = SerializeObject(boxesService.DeleteBox(box));
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/boxes/get
        [HttpPost]
        [Route("get")]
        public HttpResponseMessage Get([FromBody]BoxResponse box)
        {
            var response = new HttpResponseMessage();
            try
            {
                var boxResponse = SerializeObject(boxesService.GetBoxById(box));
                response.Content = new StringContent(boxResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/boxes/getall
        [HttpPost]
        [Route("getall")]
        public HttpResponseMessage GetAll([FromBody]BoxResponse box)
        {
            var response = new HttpResponseMessage();
            try
            {
                var boxResponse = SerializeObject(boxesService.GetAllBoxes(box));
                response.Content = new StringContent(boxResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
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