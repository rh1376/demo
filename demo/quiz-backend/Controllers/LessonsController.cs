using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quiz_backend;
using quiz_backend.Models;
using Microsoft.AspNetCore.Authorization;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Lessons")]
    public class LessonsController : Controller
    {
        private readonly Context _context;

        public LessonsController(Context context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("{id}")]
        public IEnumerable<Lesson> Get([FromRoute] int id)
        {
            return _context.Lessons.Where(q => q.ID == id);
        }

        [HttpGet("all")]
        public IEnumerable<Lesson> GetAll()
        {
            return _context.Lessons;
        }

        // PUT: api/Quizzes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Lesson Lesson)
        {
            if (id != Lesson.ID)
                return BadRequest();

            _context.Entry(Lesson).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok(Lesson);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Lesson Lesson)
        {
            var lesson = _context.Lessons.SingleOrDefault(q => q.ID == Lesson.ID);

            _context.Lessons.Add(lesson);
            await _context.SaveChangesAsync();
            return Ok(lesson);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var lesson = await _context.Lessons.SingleOrDefaultAsync(m => m.ID == id);
            if (lesson == null)
            {
                return NotFound();
            }

            _context.Lessons.Remove(lesson);
            await _context.SaveChangesAsync();

            return Ok(lesson);
        }
    }
}