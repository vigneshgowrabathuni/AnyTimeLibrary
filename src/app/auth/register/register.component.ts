import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService,
    private dataStorageService: DataStorageService,
    private userService: UserService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {

    this.dataStorageService.getUsers();
  }

  onRegister(form: NgForm) {
    const user = {
      'name': form.value.name,
      'email': form.value.email,
      'image': 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',
      'fbid': ''
    };
    this.authService.registerUser(form.value.email, form.value.password);
    this.userService.addUser(user);
    this.dataStorageService.storeUsers().subscribe((response: Response) => {
      const config = new MatSnackBarConfig();
      this.snackBar.open('Registration Successfull!!', 'OK', config);
    });
  }
}
