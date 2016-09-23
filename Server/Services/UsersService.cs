﻿using AppiaryData.Models;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class UsersService
    {
        AppiaryData.Context.DatabaseContext db;

        public UsersService(AppiaryData.Context.DatabaseContext context)
        {
            db = context;
        }

        public UserResponse Login(User u)
        {
            try
            {
                var user = db.Users.FirstOrDefault(a => a.ProfileId == u.ProfileId && a.Email == u.Email);
                var token = user.AccessToken = Guid.NewGuid().ToString();
                var response = new UserResponse() { UserId = user.UserId.ToString(), AccessToken = token };
                return response;
            }
            catch (Exception e)
            {
                throw new Exception("Unable to log in user: " + e.Message);
            }
        }

        public UserResponse CreateUser(User u)
        {
            try
            {
                var user = db.Users.Add(u);
                db.SaveChanges();
                return Login(user);
            }
            catch (Exception e)
            {
                throw new Exception("Unable to create user: " + e.Message);
            }
        }

        public void Logout(string id, string accessToken)
        {
            try
            {
                var user = db.Users.FirstOrDefault(a => a.UserId == new Guid(id) && a.AccessToken == accessToken);
                user.AccessToken = Guid.Empty.ToString();
                db.SaveChanges();
                return;
            }
            catch (Exception e)
            {
                throw new Exception("Unable to log out user: " + e.Message);
            }
        }
    }
}
