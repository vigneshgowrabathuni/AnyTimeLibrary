import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = {};
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    const emailID = this.authService.getUserEmailID();
    this.user = this.userService.getUserByEmailID(emailID);
  }
}
