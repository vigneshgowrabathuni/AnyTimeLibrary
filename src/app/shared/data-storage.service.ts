import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BookService } from '../books/book.service';
import { AuthService } from '../auth/auth.service';
import 'rxjs/RX';
import { Book } from '../books/book.model';
import { UserBook } from '../books/userbook.model';
import { Observable } from 'rxjs/RX';
import { UserService } from '../shared/user.service';

@Injectable()
export class DataStorageService {
  users: any;

  constructor(
    private http: Http,
    private bookService: BookService,
    private authService: AuthService,
    private userService: UserService
  ) { }

  storeBooks(): Observable<any> {
    const token = this.authService.getIdToken();
    return this.http.put(
      'https://anytimelibrary-73775.firebaseio.com/books.json?auth=' + token,
      this.bookService.getBooks()
    );
  }

  getBooks() {
    const token = this.authService.getIdToken();
    this.http
      .get(
        'https://anytimelibrary-73775.firebaseio.com/books.json?auth=' + token
      )
      .map((response: Response) => {
        const books: Book[] = response.json();
        return books;
      })
      .subscribe((books: Book[]) => {
        this.bookService.setBooks(books);
      });
  }

  storeUserBooks(): Observable<any> {
    const token = this.authService.getIdToken();
    return this.http.put(
      'https://anytimelibrary-73775.firebaseio.com/userbooks.json?auth=' + token,
      this.bookService.getUsersBooks()
    );
  }

  getUserBooks() {
    const token = this.authService.getIdToken();
    this.http
      .get(
        'https://anytimelibrary-73775.firebaseio.com/userbooks.json?auth=' + token
      )
      .map((response: Response) => {
        const books: UserBook[] = response.json();
        return books;
      })
      .subscribe((books: UserBook[]) => {
        this.bookService.setUsersBooks(books);
      });
  }

  getUsers() {
    this.http
      .get(
        'https://anytimelibrary-73775.firebaseio.com/users.json'
      )
      .map((response: Response) => {
        const users = response.json();
        return users;
      })
      .subscribe((users) => {
        this.userService.setUsers(users);
      });
  }

  storeUsers() {
    return this.http
      .put(
        'https://anytimelibrary-73775.firebaseio.com/users.json', this.userService.getUsers()
      );
  }
}
