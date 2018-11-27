import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { DataStorageService } from '../../shared/data-storage.service';

export interface Category {
  value: string;
}

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  book = {
    author: '',
    bookStatus: true,
    category: '',
    copies: 0,
    description: '',
    imagePath: '',
    isbn: '',
    name: '',
    rackNo: ''
  };
  bookForm = false;
  bookISBN = '';
  updateBookForm: FormGroup;
  categories: Category[] = [{ value: 'Technology' }, { value: 'Business' }, { value: 'Fiction' }, { value: 'Management' }];

  constructor(private bookService: BookService,
    private dataStorageService: DataStorageService,
    public snackBar: MatSnackBar, public fb: FormBuilder) {
  }

  ngOnInit() {

  }

  onGetBookDetails(form) {
    this.bookISBN = form.value.isbn;
    this.book = this.bookService.getBookByISBN(this.bookISBN);
    this.bookForm = true;
    this.updateBookForm = this.fb.group({
      author: [this.book.author, Validators.min(5)],
      category: this.book.category,
      copies: [this.book.copies, Validators.min(1)],
      description: this.book.description,
      imagePath: this.book.imagePath,
      name: this.book.name,
      rackNo: [this.book.rackNo, Validators.min(3)]
    });
  }

  onUpdateBook(form: NgForm) {
    const newBook = new Book(
      form.value.name,
      this.bookISBN,
      form.value.author,
      form.value.imagePath,
      form.value.description,
      form.value.rackNo,
      form.value.category,
      true,
      form.value.copies
    );
    this.bookService.updateBook(newBook);

    this.dataStorageService.storeBooks().subscribe((response: Response) => {
      const config = new MatSnackBarConfig();
      this.snackBar.open('Book Updated Successfully!!', 'OK', config);
    });
  }

}
