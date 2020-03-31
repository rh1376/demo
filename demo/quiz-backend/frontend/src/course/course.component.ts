import { CourseService } from './../servicees/course.service';
import { Course } from './../modeles/course.model';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'course',
    templateUrl: './../course/course.Component.html',    
})
export class CourseComponent implements OnInit{
    Course = new Course();
    Courses: any;

    constructor(public CourseService: CourseService) {}
    
    ngOnInit() {
        this.CourseService.getAllCourses().subscribe(response => {
            this.Courses = response;
        });
    }

    create() {
        this.CourseService.createCourse(this.Course)
        .subscribe((response : Course) => {
            this.Course.id = response.id;
        });
    }

    update() {
        this.CourseService.updateCourse(this.Course)
        .subscribe(response => {
            console.log(response);
        });
    }

    delete() {
        this.CourseService.deleteCourse(this.Course.id)
        .subscribe(response => {
            let index = this.Courses.indexof(Course);
            this.Courses.splice(index, 1);
        });
  }
}