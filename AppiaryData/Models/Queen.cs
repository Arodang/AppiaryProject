using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    class Queen : BaseModel
    {

        [Key, Required]
        public int QueenId { get; set; }

        public string Name { get; set; }

        public DateTime Born { get; set; }

        public bool isLaying { get; set; }
    }
}
