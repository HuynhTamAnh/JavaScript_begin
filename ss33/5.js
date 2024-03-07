var books = {
    book1: {
        title: "học làm giàu",
        author: "đình kha",
        publishedYear: 2020,
        isAvailable: "available",
        borrow: function() {
            return 'sách chưa được mượn';
        },
        returnBook: function() {
            return 'sách đã được trả';
        },
        isBookAvailable: function() {
            return 'sách có sẵn để mượn';
        }
    },

    book2: {
        title: "học làm người",
        author: "bảo trân",
        publishedYear: 2005,
        isAvailable: "not available",
        borrow: function() {
            return 'sách đã được mượn';
        },
        returnBook: function() {
            return 'sách chưa được trả';
        },
        isBookAvailable: function() {
            return 'sách không có sẵn để mượn';
        }
    }
};

var book3 = {
    title: "Thiên đường tung tăng",
    author: "Jiraiya",
    publishedYear: 1990,
    isAvailable: "available",
    borrow: function() {
        return 'Sách chưa được mượn';
    },
    returnBook: function() {
        return 'Sách đã được trả';
    },
    isBookAvailable: function() {
        return 'Sách có sẵn để mượn';
    }
};

books.book3= book3;

for (let book in books) {
    console.log(book + ": ");
    for (let inf in books[book]) {
        console.log("  " + inf + ": " + books[book][inf]);
    }
}

console.log("Trạng thái mượn sách của sách học làm giàu: " + books.book1.borrow()); 

console.log("Trạng thái trả sách của sách học làm người: " + books.book2.returnBook()); 

console.log("Trạng thái sẵn có của Thiên đường tung tăng: " + books.book3.isBookAvailable());   