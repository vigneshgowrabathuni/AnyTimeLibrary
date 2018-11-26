export class UserBook {
    public name: string;
    public isbn: string;
    public author: string;
    public imagePath: string;
    public issuedDateTime: string;
    public userEmail: string;
    constructor(
        name: string,
        isbn: string,
        author: string,
        imagePath: string,
        issuedDateTime: string,
        userEmail: string
    ) {
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.imagePath = imagePath;
        this.issuedDateTime = issuedDateTime;
        this.userEmail = userEmail;
    }
}
