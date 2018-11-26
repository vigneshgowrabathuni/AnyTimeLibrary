import { Component, OnInit, Input, Inject } from '@angular/core';
import { Book } from '../../book.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BookDetailComponent } from '../../book-detail/book-detail.component';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input()
  book: Book;
  @Input()
  index: number;

  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private bookService: BookService) { }

  ngOnInit() { }

  openDialog(book) {
    console.log(book);

    const dialogRef = this.dialog.open(BookDetailComponent, {
      width: '50%',
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
