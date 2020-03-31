import { Component } from '@angular/core'
import { AuthService } from './../servicees/auth.service'

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>        
        <button md-button routerLink="/">Home</button>
        <button md-button routerLink="/course">Course</button>
        <button md-button routerLink="/lesson">Lesson</button>
        <span style="flex: 1 1 auto;"></span>
        <button *ngIf="!auth.isAuthenticated" md-button routerLink="/register">Register</button>
        <button *ngIf="!auth.isAuthenticated" md-button routerLink="/login">Login</button>        
        <button *ngIf="auth.isAuthenticated" md-button (click)="auth.logout()">Logout</button>
    </mat-toolbar>
  `
})
export class NavComponent {
  constructor(public auth: AuthService) {}
}
