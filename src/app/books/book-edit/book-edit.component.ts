import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material';

export interface Category {
  value: string;
}


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  categories: Category[] = [{ value: 'Technology' }, { value: 'Business' }, { value: 'Fiction' }, { value: 'Management' }];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private dataStorageService: DataStorageService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() { }

  onAddBook(form: NgForm) {
    const newBook = new Book(
      form.value.name,
      form.value.isbn,
      form.value.author,
      form.value.imagePath,
      form.value.description,
      form.value.rackNo,
      form.value.category,
      true,
      form.value.copies
    );
    console.log(newBook);
    this.bookService.addBook(newBook);

    this.dataStorageService.storeBooks().subscribe((response: Response) => {
      console.log(response);
      const config = new MatSnackBarConfig();
      this.snackBar.open('Book Added Successfully!!', 'OK', config);
    });
  }
}
