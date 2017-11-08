import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public accountNumber: string;
  public errorMessage: string;
  public isLoading = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  login() {
    this.errorMessage = null;
    this.isLoading = true;
    this.userService.login(this.accountNumber).subscribe(() => {
      this.router.navigate(['/dashboard']);
    }, err => {
      this.isLoading = false;
      this.errorMessage = err.message;
    });
  }

}
