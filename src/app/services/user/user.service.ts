import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  public userId: string;
  private validUserIds = ['1', '2'];

  constructor() { }

  // Simulating some async call to authenticate
  login(userId: string): Observable<any> {
    if (this.validUserIds.includes(userId)) {
      return Observable.of({loggedIn: true});
    } else {
      return Observable.throw(new Error('Sorry, we don\'t recognize that account number'));
    }
  }

  // Simulating async again because that's how a real app would work
  logout(): Observable<any> {
    this.userId = null;
    return Observable.of({loggedIn: false});
  }

  isLoggedIn(): boolean {
    return !!this.userId;
  }

}
