import { Course, CourseSelect } from './../modeles/course.model';
import { CourseService } from './../servicees/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './../course/course_detail.Component.html', 
})
export class CourseDetailComponent implements OnInit{    
    Course: Course;
    
    constructor(public CourseService: CourseService, public route: ActivatedRoute) {}

    ngOnInit() {     
        var courseId = this.route.snapshot.paramMap.get('courseId')

        this.CourseService.getCourse(courseId).subscribe(response => {
            this.Course = response as Course;
            console.log(response);
        },
        error => {
            alert("خطایی پیش آمده است")
        });

       
    }
}