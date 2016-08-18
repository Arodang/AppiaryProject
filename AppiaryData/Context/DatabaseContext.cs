using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using AppiaryData.Models;

namespace AppiaryData.Context
{
    class DatabaseContext : DbContext
    {

        public DbSet<Box> Boxes { get; set; }

        public DbSet<Frame> Frames { get; set; }

        public DbSet<Note> Notes { get; set; }
    }
}
