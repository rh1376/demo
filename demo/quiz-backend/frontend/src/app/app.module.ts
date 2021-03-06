import { CourseDetailComponent } from './../course/course_detail.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './../course/course.component';
import { CourseListComponent } from './../course/course_list.component';
import { LessonComponent } from './../lesson/lesson.component';
import { HomeComponent } from './../Home/home.component';
import { NavComponent } from './../nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatSelectModule} from '@angular/material/select'; 
import { AuthService } from './../servicees/auth.service'
import { CourseService } from './../servicees/course.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './../auth.interceptor'
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list'; 

const routes = [
  { path: '', component: HomeComponent},
  { path: 'course', component: CourseComponent},
  { path: 'lesson', component: LessonComponent},
  { path: 'CourseDetail/:courseId', component: CourseDetailComponent},
]


@NgModule({
  declarations: [
    AppComponent, CourseComponent, LessonComponent, NavComponent, HomeComponent, CourseListComponent, CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,    
    HttpClientModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [AuthService, CourseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
