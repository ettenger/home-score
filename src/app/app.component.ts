import { Component } from '@angular/core';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService: UserService) {}

  logout() {
    this.userService.logout().subscribe(() => {
      // TODO: Redirect to login page
    });
  }
}
