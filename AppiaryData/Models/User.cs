using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class User : BaseModel
    {
        [Key, Required]
        public Guid UserId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string ProfileId { get; set; }

        public string AccessToken { get; set; }

        public List<Apiary> Apiaries { get; set; }
    }
}
