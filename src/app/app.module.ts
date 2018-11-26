import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './shared/material.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookService } from './books/book.service';
import { DataStorageService } from './shared/data-storage.service';
import { UserBookListComponent } from './books/user-book-list/user-book-list.component';
import { BookDeleteComponent } from './books/book-delete/book-delete.component';
import { AuthGuard } from '../app/auth/auth-guard.service';
import { BookUpdateComponent } from './books/book-update/book-update.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './shared/user.service';
import { UsersBookListComponent } from './books/users-book-list/users-book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    BooksComponent,
    BookDetailComponent,
    BookListComponent,
    BookEditComponent,
    BookItemComponent,
    UserBookListComponent,
    BookDeleteComponent,
    BookUpdateComponent,
    UserProfileComponent,
    UsersBookListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BookDetailComponent,
    DashboardComponent
  ],
  entryComponents: [
    BookDetailComponent
  ],
  providers: [AuthService, BookService, UserService, DataStorageService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
