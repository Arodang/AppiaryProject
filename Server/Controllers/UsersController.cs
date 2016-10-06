using AppiaryData.Models;
using Server.Services;
using System;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Server.Controllers
{
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        UsersService usersService = new UsersService();

        public UsersController() { }

        // POST api/users/login
        [HttpPost]
        [Route("login")]
        public HttpResponseMessage Login([FromBody] User user)
        {
            var response = new HttpResponseMessage();
            try
            {
                var userResponse = Newtonsoft.Json.JsonConvert.SerializeObject(usersService.Login(user));
                response.Content = new StringContent(userResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }


        // PUT api/users/create
        [HttpPut]
        [Route("create")]
        public HttpResponseMessage Create([FromBody]User user)
        {
            //This request works: {"name":"Dan","profileid":"12345"}
            var response = new HttpResponseMessage();
            try
            {
                var userResponse = Newtonsoft.Json.JsonConvert.SerializeObject(usersService.CreateUser(user));
                response.Content = new StringContent(userResponse, Encoding.UTF8, Constants.ApplicationJsonFormat);
                response.StatusCode = System.Net.HttpStatusCode.OK;
            }
            catch (Exception e)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                response.Content = new StringContent(e.Message, Encoding.UTF8, Constants.ApplicationJsonFormat);
            }
            return response;
        }

        // GET api/values/logout/5/0000-0000-0000-000
        [HttpGet()]
        [Route("logout/{id}/{accessToken}")]
        public HttpResponseMessage Logout(string id, string accessToken)
        {
            var response = new HttpResponseMessage();
            try
            {
                usersService.Logout(id, accessToken);
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