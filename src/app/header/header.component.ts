import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  widthVar = screen.width;
  smWidth = false;
  mdWidth = false;
  userTypeAdmin = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.widthVar);
    if (this.widthVar >= 768) {
      this.mdWidth = true;
    } else {
      this.smWidth = true;
    }
    this.authService.getUserType().subscribe(
      user => {
        console.log(user);
        if (user.userType === 'admin') {
          this.userTypeAdmin = true;
        } else {
          this.userTypeAdmin = false;
        }
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }
}
