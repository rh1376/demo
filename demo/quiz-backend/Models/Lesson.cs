namespace quiz_backend.Models
{
    public class Lesson
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public string CourseId { get; set; }
    }
}
