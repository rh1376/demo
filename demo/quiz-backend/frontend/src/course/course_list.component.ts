import { Course, CourseSelect } from './../modeles/course.model';
import { CourseService } from './../servicees/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'course_list',
    templateUrl: './../course/course_list.component.html'
})
export class CourseListComponent {    
    Courses: Course[];
    
    constructor(public CourseService: CourseService) {}

    ngOnInit() {        
        this.CourseService.getAllCourses().subscribe(response => {
            this.Courses = response as Course[];
        },
        error => {
            alert("خطایی پیش آمده است")
        });

        console.log(this.Courses);
    }
}