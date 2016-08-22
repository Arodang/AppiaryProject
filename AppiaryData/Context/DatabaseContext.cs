﻿using System;
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

        public DbSet<FrameInspection> FrameInspections { get; set; }

        public DbSet<FrameSideInspection> FrameSideInspections { get; set; }

        public DbSet<Hive> Hives { get; set; }

        public DbSet<Inspection> Inspections { get; set; }

        public DbSet<InspectionTakenAction> InspectionTakenActions { get; set; }

        public DbSet<Note> Notes { get; set; }

        public DbSet<Queen> Queens { get; set; }
    }
}
