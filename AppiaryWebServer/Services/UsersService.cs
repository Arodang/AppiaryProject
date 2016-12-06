using AppiaryData.Models;
using AppiaryWebServer.Models;
using System;
using System.Linq;

namespace AppiaryWebServer.Services
{
    public class UsersService
    {
        AppiaryData.Context.DatabaseContext db = new AppiaryData.Context.DatabaseContext();

        public UserResponse Login(User u)
        {
            try
            {
                var user = db.Users.FirstOrDefault(a => a.ProfileId == u.ProfileId && a.Email == u.Email);
                var token = user.AccessToken = Guid.NewGuid().ToString();
                db.SaveChanges();
                var response = new UserResponse() { UserId = user.UserId.ToString(), AccessToken = token };
                return response;
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception loggin in user: " + e.StackTrace);
                throw new Exception("Unable to log in user: " + e.Message);
            }
        }

        public UserResponse CreateUser(User u)
        {
            try
            {
                u.CreatedBy = "user request";
                var user = db.Users.Add(u);
                db.SaveChanges();
                return Login(user);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception creating user: " + e.StackTrace);
                throw new Exception("Unable to create user: " + e.Message);
            }
        }

        public void Logout(string id, string accessToken)
        {
            try
            {
                var user = db.Users.FirstOrDefault(a => a.UserId == new Guid(id) && a.AccessToken == accessToken);
                user.AccessToken = Guid.NewGuid().ToString();
                db.SaveChanges();
                return;
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception logging out user: " + e.StackTrace);
                throw new Exception("Unable to log out user: " + e.Message);
            }
        }

        public User getBaseUser()
        {
            return db.Users.First();
        }
    }
}
