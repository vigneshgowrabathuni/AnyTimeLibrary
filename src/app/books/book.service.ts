import { Book } from './book.model';
import { UserBook } from './userbook.model';
import { Subject } from 'rxjs';

export class BookService {
  booksChanged = new Subject<Book[]>();
  userBooksChanged = new Subject<UserBook[]>();
  books: any;
  usersBooks: any;
  bookIndex = 0;
  constructor() { }

  setBooks(books: Book[]) {
    this.books = books;
  }

  getBooks() {
    return this.books;
  }

  setUsersBooks(books) {
    this.usersBooks = books;
  }

  getUsersBooks() {
    return this.usersBooks;
  }

  getUserBooksByEmailID(emailID) {
    const uBooks = [];
    if (this.usersBooks !== null) {
      for (let i = 0; i < this.usersBooks.length; i++) {
        if (this.usersBooks[i].userEmail === emailID) {
          uBooks.push(this.usersBooks[i]);
        }
      }
    }
    return uBooks;
  }

  getBook(index: number) {
    return this.books[index];
  }

  filterBooksByName(bName: string) {
    const filteredBooks = [];
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      const bookName = book.name;
      if (bookName.toLowerCase().includes(bName)) {
        filteredBooks.push(book);
      }
    }
    this.books = filteredBooks;

  }

  addBook(book: Book) {
    if (this.books === null) {
      this.books = [];
      this.books.push(book);
    } else {
      this.books.push(book);
    }
    this.booksChanged.next(this.books.slice());
  }

  updateBook(newBook) {
    const index = this.bookIndex;
    this.books[index] = newBook;
    this.booksChanged.next(this.books.slice());
  }

  addUserBook(book) {
    if (this.usersBooks === null) {
      this.usersBooks = [];
      this.usersBooks.push(book);
    } else {
      this.usersBooks.push(book);
    }
  }

  getBookByISBN(bookISBN) {
    let index = 0;
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      const bISBN = book.isbn;
      if (bookISBN === bISBN) {
        index = i;
      }
    }
    this.bookIndex = index;
    return this.getBook(index);
  }

  updateBookByISBN(bookISBN) {
    let index = 0;
    let newBook = {};
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      const bISBN = book.isbn;
      if (bookISBN === bISBN) {
        index = i;
        newBook = this.books[i];
        const copies = newBook['copies'];
        if (copies > 0) {
          newBook['copies'] = copies - 1;
        } else {
          newBook['bookStatus'] = false;
        }
      }
    }
    this.bookIndex = index;
    this.updateBook(newBook);
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    this.booksChanged.next(this.books.slice());
  }

  deleteBookByISBN(isbn: number) {
    let index = 0;
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      const bISBN = book.isbn;
      if (isbn === bISBN) {
        index = i;
      }
    }
    this.books.splice(index, 1);
    this.booksChanged.next(this.books.slice());
  }

  deleteUserBookByISBN(isbn: number) {
    let index = 0;
    for (let i = 0; i < this.usersBooks.length; i++) {
      const book = this.usersBooks[i];
      const bISBN = book.isbn;
      if (isbn === bISBN) {
        index = i;
      }
    }
    this.usersBooks.splice(index, 1);
    this.userBooksChanged.next(this.usersBooks.slice());
  }

  returnBookByISBN(bookISBN) {
    this.deleteUserBookByISBN(bookISBN);
    let index = 0;
    let newBook = {};
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      const bISBN = book.isbn;
      if (bookISBN === bISBN) {
        index = i;
        newBook = this.books[i];
        const copies = newBook['copies'];
        newBook['copies'] = copies + 1;
        newBook['bookStatus'] = true;
      }
    }
    this.bookIndex = index;
    this.updateBook(newBook);
  }
}
