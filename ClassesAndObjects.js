class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    // Method to describe the book
    describe() {
        return `${this.title} by ${this.author}, published in ${this.publicationYear}`
    }
}


// Creating book instances

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// Using the methods of the class

console.log(book1.describe());
console.log(book2.describe());
console.log(book3.describe());