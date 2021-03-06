import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book.model';
import { UserBook } from '../userbook.model';
import { BookService } from '../book.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AuthService } from '../../auth/auth.service';
import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  entryComponents: [DashboardComponent]
})
export class BookDetailComponent implements OnInit {
  bookData: any;
  bookStatus = true;
  constructor(private bookService: BookService,
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<BookDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book) {
    this.bookData = data;
  }

  ngOnInit() {
    if (this.bookData.copies === 0) {
      this.bookStatus = false;
    }
  }

  onIssueBook() {

    const userBook = new UserBook(
      this.bookData.name,
      this.bookData.isbn,
      this.bookData.author,
      this.bookData.imagePath,
      new Date().toLocaleString(),
      this.authService.getUserEmailID()
    );
    this.bookService.addUserBook(userBook);
    this.dataStorageService.storeUserBooks().subscribe((response: Response) => {
    });

    this.bookService.updateBookByISBN(this.bookData.isbn);
    this.dataStorageService.storeBooks().subscribe((response: Response) => {
      const config = new MatSnackBarConfig();
      this.snackBar.open('Book Issued Successfully!!', 'OK', config);
    });

  }
}
