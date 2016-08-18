using AppiaryData.Context;
using AppiaryData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiaryData
{
    class Program
    {
        static void Main(string[] args)
        {
            //TODO: This is testing code to check the database.
            using (var db = new DatabaseContext())
            {
                Console.WriteLine("Testing database");

                var note = new Note { CreatedBy = "Dan", CreatedDateTime = DateTime.Now, LastModifiedDateTime = DateTime.Now, NoteText = "This is a test" };

                db.Notes.Add(note);
                db.SaveChanges();

                var noteList = db.Notes.ToList();

                Console.WriteLine("There are " + noteList.Count + " notes");

                foreach (var n in noteList)
                {
                    Console.WriteLine("Note " + n.NoteId + ": " + n.NoteText + "\n Created by: " + n.CreatedBy + " at " + n.CreatedDateTime.ToString());
                }

                Console.WriteLine("Press any key to exit");
                Console.ReadKey();

            }

        }
    }
}
