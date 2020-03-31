import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './../course/course.component';
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

const routes = [
  { path: '', component: HomeComponent},
  { path: 'course', component: CourseComponent},
  { path: 'lesson', component: LessonComponent},
]


@NgModule({
  declarations: [
    AppComponent, CourseComponent, LessonComponent, NavComponent, HomeComponent
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
    MatToolbarModule
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
