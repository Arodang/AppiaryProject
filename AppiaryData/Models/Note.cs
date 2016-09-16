using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData.Models
{
    public class Note : BaseModel
    {
        [Key, Required]
        public int NoteId { get; set; }

        [Required]
        public string NoteText { get; set; }
    }
}
