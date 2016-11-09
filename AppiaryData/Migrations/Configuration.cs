namespace AppiaryData.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using AppiaryData.Models;
    using System.Collections.Generic;

    internal sealed class Configuration : DbMigrationsConfiguration<AppiaryData.Context.DatabaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "AppiaryData.Context.DatabaseContext";
        }

        private List<Frame> GenerateFrames()
        {
            var frames = new List<Frame>();
            for (var i = 0; i < 10; i++)
            {
                var f = new Frame()
                {
                    IsFoundationPlastic = false,
                    IsHaveFoundation = true,
                    Position = i + 1,
                    CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                    CreatedDateTime = DateTime.Now,
                    LastModifiedDateTime = DateTime.Now
                };
                frames.Add(f);
            }

            return frames;
        }

        protected override void Seed(AppiaryData.Context.DatabaseContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var baseUser = new User()
            {
                UserId = new Guid("5808dc23-4181-e611-9dfb-c05627ce99a6"),
                Name = "Dan",
                Email = "dan@example.com",
                ProfileId = "12345",
                AccessToken = "5151f48d-6a41-4390-85ed-c1cc2e581161",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                CreatedBy = "User Request"
            };

            var apiary = new Apiary()
            {
                Address = "5000 Gleason Circle",
                Name = "RITBeeks Hives",
                Description = "RIT Beekeeper's Club Hives",
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now
            };

            //YELLOW HIVE
            var generatedFrames = GenerateFrames();
            var yellowBox1 = new Box()
            {
                Name = "Honey 1",
                Position = 1,
                BoxType = Box.BoxTypeEnum.Shallow,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            generatedFrames = GenerateFrames();
            var yellowBox2 = new Box()
            {
                Name = "Brood 1",
                Position = 2,
                BoxType = Box.BoxTypeEnum.Deep,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            generatedFrames = GenerateFrames();
            var yellowBox3 = new Box()
            {
                Name = "Brood 2",
                Position = 2,
                BoxType = Box.BoxTypeEnum.Deep,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            var yellowHive = new Hive()
            {
                Name = "Yellow Hive",
                HiveType = Hive.HiveTypeEnum.Langstroth10Frame,
                Position = 1,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Boxes = new List<Box>()
                {
                    yellowBox1, yellowBox2, yellowBox3
                }
            };


            //PURPLE HIVE

            generatedFrames = GenerateFrames();
            var purpleBox1 = new Box()
            {
                Name = "Honey 1",
                Position = 1,
                BoxType = Box.BoxTypeEnum.Shallow,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            generatedFrames = GenerateFrames();
            var purpleBox2 = new Box()
            {
                Name = "Brood 1",
                Position = 2,
                BoxType = Box.BoxTypeEnum.Deep,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            generatedFrames = GenerateFrames();
            var purpleBox3 = new Box()
            {
                Name = "Brood 2",
                Position = 2,
                BoxType = Box.BoxTypeEnum.Deep,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            var purpleHive = new Hive()
            {
                Name = "Purple Hive",
                HiveType = Hive.HiveTypeEnum.Langstroth10Frame,
                Position = 2,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Boxes = new List<Box>()
                {
                    purpleBox1, purpleBox2, purpleBox3
                }
            };


            //WHITE HIVE

            generatedFrames = GenerateFrames();
            var whiteBox1 = new Box()
            {
                Name = "Honey 1",
                Position = 1,
                BoxType = Box.BoxTypeEnum.Shallow,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            generatedFrames = GenerateFrames();
            var whiteBox2 = new Box()
            {
                Name = "Brood 1",
                Position = 2,
                BoxType = Box.BoxTypeEnum.Deep,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            generatedFrames = GenerateFrames();
            var whiteBox3 = new Box()
            {
                Name = "Brood 2",
                Position = 2,
                BoxType = Box.BoxTypeEnum.Deep,
                NumberOfFramesCanFit = 10,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Frames = generatedFrames
            };

            var whiteHive = new Hive()
            {
                Name = "White Hive",
                HiveType = Hive.HiveTypeEnum.Langstroth10Frame,
                Position = 3,
                CreatedBy = "5808dc23-4181-e611-9dfb-c05627ce99a6",
                CreatedDateTime = DateTime.Now,
                LastModifiedDateTime = DateTime.Now,
                Boxes = new List<Box>()
                {
                    whiteBox1, whiteBox2, whiteBox3
                }
            };

            apiary.Hives = new List<Hive>()
            {
                yellowHive, whiteHive, purpleHive
            };

            baseUser.Apiaries = new List<Apiary>() {
                apiary
            };

            context.Users.AddOrUpdate(baseUser);
        }
    }
}
