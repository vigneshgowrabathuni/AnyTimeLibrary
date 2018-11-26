export class Book {
  public name: string;
  public isbn: string;
  public author: string;
  public imagePath: string;
  public description: string;
  public rackNo: String;
  public category: string;
  public bookStatus: boolean;
  public copies: number;

  constructor(
    name: string,
    isbn: string,
    author: string,
    imagePath: string,
    description: string,
    rackNo: String,
    category: string,
    bookStatus: boolean,
    copies: number
  ) {
    this.name = name;
    this.isbn = isbn;
    this.author = author;
    this.description = description;
    this.imagePath = imagePath;
    this.rackNo = rackNo;
    this.category = category;
    this.bookStatus = bookStatus;
    this.copies = copies;
  }
}
