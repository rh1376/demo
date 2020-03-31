import { Course, CourseSelect } from './../modeles/course.model';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CourseService {
    private url = "http://localhost:63100/api/Courses";

    constructor(private http: HttpClient) {}

    getAllCourses(){
        return this.http.get(this.url + "/all");
    } 
    
    getCourse(id){
        return this.http.get(this.url + "/" + id);
    } 

    createCourse(course: Course){
        return this.http.post(this.url, course);
    } 

    updateCourse(course: Course){
        return this.http.put(this.url + "/" + course.id, course);
    } 

    deleteCourse(id){
        return this.http.delete(this.url + "/" + id);
    } 
}