class Book {
    constructor(title, author, publishedYear) {
        this._title = title;
        this._author = author;
        this._publishedYear = publishedYear;
    }

    get title(){
        return this._title;
    }
    
    set title(newTitle){
        this._title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    get publishedYear() {
        return this._publishedYear;
    }

    set publishedYear(newPublishedYear) {
        this._publishedYear = newPublishedYear;
    }

    info() {
        return `${this.title} - ${this.author} (${this.publishedYear})`;
    }
}

class Library {
    constructor() {
        this._books = [];
    }

    get books() {
        return this._books;
    }

    addBook() {
        const title = prompt("Nhập tiêu đề sách:");
        const author = prompt("Nhập tác giả:");
        const publishedYear = prompt("Nhập năm xuất bản:");
        const book = new Book(title, author, publishedYear);
        this._books.push(book);
    }

    outp() {
        for (let book of this.books) {
            console.log(book.info());
        }
    }
}

const library = new Library();

library.addBook();
library.addBook();
library.addBook();

console.log("Danh sách sách trong thư viện:");
library.outp();
