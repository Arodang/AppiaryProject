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
    [RoutePrefix("api/frames")]
    public class FramesController : ApiController
    {
        FramesService framesService = new FramesService();

        public FramesController() { }

        // PUT api/frames/create
        [HttpPut]
        [Route("create")]
        public HttpResponseMessage Create([FromBody]FrameResponse frame)
        {
            var response = new HttpResponseMessage();
            try
            {
                var frameId = SerializeObject(framesService.CreateFrame(frame));
                response.Content = new StringContent(frameId, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/frames/edit
        [HttpPost]
        [Route("edit")]
        public HttpResponseMessage Edit([FromBody]FrameResponse frame)
        {
            var response = new HttpResponseMessage();
            try
            {
                var frameId = SerializeObject(framesService.EditFrame(frame));
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //DELETE api/frames/delete
        [HttpDelete]
        [Route("delete")]
        public HttpResponseMessage Delete([FromBody]FrameResponse frame)
        {
            var response = new HttpResponseMessage();
            try
            {
                var success = SerializeObject(framesService.DeleteFrame(frame));
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/frames/get
        [HttpPost]
        [Route("get")]
        public HttpResponseMessage Get([FromBody]FrameResponse frame)
        {
            var response = new HttpResponseMessage();
            try
            {
                var frameResponse = SerializeObject(framesService.GetFrameById(frame));
                response.Content = new StringContent(frameResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        //POST api/frames/getall
        [HttpPost]
        [Route("getall")]
        public HttpResponseMessage GetAll([FromBody]FrameResponse frame)
        {
            var response = new HttpResponseMessage();
            try
            {
                var frameResponse = SerializeObject(framesService.GetAllFrames(frame));
                response.Content = new StringContent(frameResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
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