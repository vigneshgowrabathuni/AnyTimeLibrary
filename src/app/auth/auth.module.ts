import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [MatFormFieldModule, AuthRoutingModule, MatInputModule],
  exports: [MatFormFieldModule, MatInputModule],
})
export class AuthModule {}
