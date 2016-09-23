using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using AppiaryData.Models;
using AppiaryServer.Services;
using System.Net.Http;
using System.Text;

namespace AppiaryServer.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        UsersService usersService;

        public UsersController(UsersService u)
        {
            usersService = u;
        }

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
            catch(Exception e)
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
