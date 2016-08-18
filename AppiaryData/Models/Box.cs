﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    class Box : BaseModel
    {
        public enum BoxTypeEnum { Deep, Medium, Shallow, Feeder }

        [Key, Required]
        public int BoxId { get; set; }

        public string Name { get; set; }

        public BoxTypeEnum BoxType { get; set; }

        public int NumberOfFramesCanFit { get; set; }

        public List<Frame> Frames { get; set; }
    }
}
