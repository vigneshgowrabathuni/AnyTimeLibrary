import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { BookService } from '../books/book.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  search = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private bookService: BookService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.dataStorageService.getBooks();
    this.dataStorageService.getUserBooks();
  }

  onSearch(form: NgForm) {
    this.bookService.filterBooksByName(form.value.search);
  }
}
