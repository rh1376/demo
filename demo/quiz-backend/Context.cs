using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using quiz_backend.Models;

namespace quiz_backend
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        public DbSet<Models.Course> Courses { get; set; }

        public DbSet<quiz_backend.Models.Lesson> Lessons { get; set; }

    }
}
