import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean;
  token: string;
  constructor() { }
  login(userName: string, password: string): boolean {
    if (userName == 'admin' && password == '0000') {
      this.authenticated = true;
      this.saveToken();
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  }
  saveToken() {
    this.token = '1234ABC';
    localStorage.setItem('authToken', this.token);
  }
  loadToken() {
    this.token = localStorage.getItem('authToken');
    if (this.token == '1234ABC') {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  }
  public logout() {
    localStorage.removeItem('authToken');
  }
}
