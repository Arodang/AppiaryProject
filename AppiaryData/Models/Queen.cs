﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class Queen : BaseModel
    {

        [Key, Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid QueenId { get; set; }

        public string Name { get; set; }

        public DateTime Born { get; set; }

        public bool isLaying { get; set; }
    }
}
