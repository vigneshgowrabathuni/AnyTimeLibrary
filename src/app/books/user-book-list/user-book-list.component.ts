import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Book } from '../book.model';
import { UserBook } from '../userbook.model';
import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-book-list',
  templateUrl: './user-book-list.component.html',
  styleUrls: ['./user-book-list.component.css']
})
export class UserBookListComponent implements OnInit, OnDestroy {
  userBooks = [];
  subscription: Subscription;

  constructor(private bookService: BookService,
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    public snackBar: MatSnackBar) { }
  ngOnInit() {

    // this.subscription = this.bookService.userBooksChanged.subscribe(
    //   (books: UserBook[]) => {
    //     this.userBooks = books;
    //   }
    // );
    const emailID = this.authService.getUserEmailID();
    this.userBooks = this.bookService.getUserBooksByEmailID(emailID);
    console.log(this.userBooks);
  }

  onRenewBook() {
    const config = new MatSnackBarConfig();
    this.snackBar.open('Book renewed Successfully!!', 'OK', config);
  }

  onReturnBook(emailID, isbn) {
    this.userBooks = this.bookService.returnBook(emailID, isbn);
    this.dataStorageService.storeUserBooks().subscribe((response: Response) => {
      // console.log(response);
      const config = new MatSnackBarConfig();
      this.snackBar.open('Book Returned Successfully!!', 'OK', config);
    });

    this.dataStorageService.storeBooks().subscribe((response: Response) => {
      // console.log(response);
    });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
