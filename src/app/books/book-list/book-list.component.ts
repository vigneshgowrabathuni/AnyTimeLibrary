import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService,
  ) { }

  ngOnInit() {
    // this.dataStorageService.getBooks();

    this.subscription = this.bookService.booksChanged.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
