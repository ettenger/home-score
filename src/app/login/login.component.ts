import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public accountNumber: string;
  public errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.errorMessage = null;
    this.userService.login(this.accountNumber).subscribe(() => {
      // TODO: Redirect to dashboard
    }, err => {
      this.errorMessage = err;
    });
  }

}
