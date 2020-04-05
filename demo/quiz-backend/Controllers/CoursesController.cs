using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Courses")]
    public class CoursesController : Controller
    {
        readonly Context context;

        public CoursesController(Context context)
        {
            this.context = context;
        }

        [HttpGet("GetAll")]
        public IEnumerable<Models.Course> GetAll()
        {
            return context.Courses;
        }

        [HttpGet("{id}")]
        public async Task<Models.Course> Get([FromRoute] int id)
        {
            return await context.Courses.FirstOrDefaultAsync(q => q.id == id);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Models.CourseCreate Course)
        {
            Models.Course newCourse = new Models.Course() {
                description = Course.description,
                name = Course.name
            };
            context.Courses.Add(newCourse);
            await context.SaveChangesAsync();
            return Ok(Course);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody]Models.Course Course)
        {
            if (id != Course.id)
                return BadRequest();

            context.Entry(Course).State = EntityState.Modified;

            await context.SaveChangesAsync();

            return Ok(Course);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var course = await context.Courses.SingleOrDefaultAsync(m => m.id == id);
            if (course == null)
            {
                return NotFound();
            }

            context.Courses.Remove(course);
            await context.SaveChangesAsync();

            return Ok(course);
        }
    }
}