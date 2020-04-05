using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quiz_backend.Models
{
    public class Course
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }        
        
    }

    public class CourseCreate
    {        
        public string name { get; set; }
        public string description { get; set; }

    }
}
