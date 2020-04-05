import { CourseService } from './../servicees/course.service';
import { Course } from './../modeles/course.model';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'course',
    templateUrl: './../course/course.Component.html',    
})
export class CourseComponent{
    Course: Course = {};
    Courses: any;

    constructor(public CourseService: CourseService) {}
    

    create(Course) {
        this.CourseService.createCourse(Course)
        .subscribe((response : Course) => {
            Course.id = response.id;
        });
        Course.id = 0;
        Course.name = "";
        Course.description = "";
    }

    update(Course) {
        this.CourseService.updateCourse(Course)
        .subscribe(response => {
            console.log(response);
        });
    }

    delete(Course) {
        this.CourseService.deleteCourse(Course.id)
        .subscribe(response => {
            let index = this.Courses.indexof(this.Course);
            this.Courses.splice(index, 1);
        });
  }
}