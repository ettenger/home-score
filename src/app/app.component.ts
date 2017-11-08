import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    public userService: UserService
  ) {}

  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
