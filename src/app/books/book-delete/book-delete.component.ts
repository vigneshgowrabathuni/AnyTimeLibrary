import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { DataStorageService } from '../../shared/data-storage.service';
import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  constructor(private bookService: BookService,
    private dataStorageService: DataStorageService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onDeleteBook(form: NgForm) {
    this.bookService.deleteBookByISBN(form.value.isbn);
    this.dataStorageService.storeBooks().subscribe((response: Response) => {
      const config = new MatSnackBarConfig();
      this.snackBar.open('Book Deleted Successfully!!', 'OK', config);
    });
  }

}
