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
    [RoutePrefix("api/inspections")]
    public class InspectionController : ApiController
    {
        InspectionService inspectionService = new InspectionService();

        public InspectionController() { }

        // PUT api/frames/create
        [HttpPut]
        [Route("create")]
        public HttpResponseMessage Create([FromBody]InspectionResponse inspection)
        {
            var response = new HttpResponseMessage();
            try
            {
                var inspectionId = SerializeObject(inspectionService.CreateInspection(inspection));
                response.Content = new StringContent(inspectionId, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }



        ////POST api/frames/get
        //[HttpPost]
        //[Route("get")]
        //public HttpResponseMessage Get([FromBody]FrameResponse frame)
        //{
        //    var response = new HttpResponseMessage();
        //    try
        //    {
        //        var frameResponse = SerializeObject(inspectionService.GetFrameById(frame));
        //        response.Content = new StringContent(frameResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
        //        response.StatusCode = System.Net.HttpStatusCode.OK;
        //    }
        //    catch (Exception e)
        //    {
        //        response.StatusCode = HttpStatusCode.InternalServerError;
        //        response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
        //    }
        //    return response;
        //}

        ////POST api/frames/getall
        //[HttpPost]
        //[Route("getall")]
        //public HttpResponseMessage GetAll([FromBody]FrameResponse frame)
        //{
        //    var response = new HttpResponseMessage();
        //    try
        //    {
        //        var frameResponse = SerializeObject(inspectionService.GetAllFrames(frame));
        //        response.Content = new StringContent(frameResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
        //        response.StatusCode = System.Net.HttpStatusCode.OK;
        //    }
        //    catch (Exception e)
        //    {
        //        response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
        //        response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
        //    }
        //    return response;
        //}


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