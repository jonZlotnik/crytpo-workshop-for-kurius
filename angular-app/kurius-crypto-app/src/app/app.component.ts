import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="auth.user | async as user; else showLogin">
      <h1>Hello {{ user.email }}!</h1>
      <button (click)="logout()">Logout</button>
    </div>
    <ng-template #showLogin>
      <p>Please login.</p>
      <button (click)="login()">Login with Google</button>
      <button (click)="loginGithub()">Login with GitHub</button>
    </ng-template>
  `,
})
export class AppComponent {
  constructor(public auth: AngularFireAuth) {
  }
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  loginGithub() {
    this.auth.signInWithPopup(new auth.GithubAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}