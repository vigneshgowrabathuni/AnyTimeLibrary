import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errMsg: string;
  constructor(private authService: AuthService,
    private dataStorageService: DataStorageService,
    private userService: UserService) { }

  ngOnInit() {
    this.dataStorageService.getUsers();
  }

  onLogin(form: NgForm) {
    this.dataStorageService.getUsers();
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password);
    this.authService.getErrorMsg().subscribe(
      res => this.errMsg = res.msg
    );
    this.userService.getUserByEmailID(email);
  }
}
