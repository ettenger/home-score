import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  public userId: string;
  private validUserIds = ['1', '2'];

  constructor() {
    this.userId = sessionStorage.getItem('userId');
  }

  // Simulating some async call to authenticate
  login(userId: string): Observable<any> {
    if (this.validUserIds.includes(userId)) {
      this.setUserId(userId);
      return Observable.of({loggedIn: true});
    } else {
      return Observable.throw(new Error('Sorry, we don\'t recognize that account number'));
    }
  }

  // Simulating async again because that's how a real app would work
  logout(): Observable<any> {
    this.resetUserId();
    return Observable.of({loggedIn: false});
  }

  isLoggedIn(): boolean {
    return !!this.userId;
  }

  private setUserId(userId: string): void {
    this.userId = userId;
    sessionStorage.setItem('userId', userId);
  }

  private resetUserId(): void {
    this.userId = null;
    sessionStorage.removeItem('userId');
  }

}
