import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsAuthService {
  isAuth: boolean = false;

  constructor() {}

  checkAuth(): boolean {
    return this.isAuth;
  }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }
}
