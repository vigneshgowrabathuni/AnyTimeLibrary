import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-users-book-list',
  templateUrl: './users-book-list.component.html',
  styleUrls: ['./users-book-list.component.css']
})
export class UsersBookListComponent implements OnInit {
  userBooks = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.userBooks = this.bookService.getUsersBooks();
  }

}
