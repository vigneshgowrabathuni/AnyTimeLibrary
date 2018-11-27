import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth-guard.service';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { UserBookListComponent } from './books/user-book-list/user-book-list.component';
import { BookDeleteComponent } from './books/book-delete/book-delete.component';
import { BookUpdateComponent } from './books/book-update/book-update.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersBookListComponent } from './books/users-book-list/users-book-list.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'searchbooks', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'add', component: BookEditComponent, canActivate: [AuthGuard] },
  { path: 'update', component: BookUpdateComponent, canActivate: [AuthGuard] },
  { path: 'delete', component: BookDeleteComponent, canActivate: [AuthGuard] },
  { path: 'mybooks', component: UserBookListComponent, canActivate: [AuthGuard] },
  { path: 'userbooks', component: UsersBookListComponent, canActivate: [AuthGuard] },
  { path: 'myprofile', component: BookDeleteComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
