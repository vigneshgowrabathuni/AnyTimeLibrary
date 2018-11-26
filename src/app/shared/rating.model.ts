export class Rating {
    public name: string;
    public isbn: string;
    public overallRating: number;
    public reviewTitle: string;
    public reviewDescription: string;

    constructor(
        name: string,
        isbn: string,
        overallRating: number,
        reviewTitle: string,
        reviewDescription: string
    ) {
        this.name = name;
        this.isbn = isbn;
        this.overallRating = overallRating;
        this.reviewTitle = reviewTitle;
        this.reviewDescription = reviewDescription;
    }
}
