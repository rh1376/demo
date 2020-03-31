import { Lesson } from './../modeles/lesson.model';
import { CourseSelect } from './../modeles/course.model';
import { Component } from '@angular/core';

@Component({
    selector: 'lesson',
    templateUrl: './../lesson/lesson.Component.html',    
})
export class LessonComponent{
    Lesson = new Lesson();
    Courses: CourseSelect[] = [
        {id: 1, name: 'PHP'},
        {id: 2, name: 'C#'},
        {id: 3, name: 'JAVA'}
      ];

      create() {
          console.log(this.Lesson);
    }
}
