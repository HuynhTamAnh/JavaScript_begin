let lib = [];
let authors = {};

while (true) {
    let author = prompt('Nhập tên tác giả (để kết thúc, nhập "done"):');
    if (author.toLowerCase() === 'done') {
        break;
    }
    let bookName = prompt('Nhập tên sách của tác giả:');
    lib.push({ author: author, name: bookName }); 
    if (authors[author]) {
        authors[author].push(bookName);
    } else {
        authors[author] = [bookName];
    }
}

function search(Auth){
    let res=[];
    for(let i=0;i<lib.length;i++){
        if(lib[i].author === Auth){
            res.push(lib[i]);
        }
    }
    return res;
}

const Auth = prompt('Nhập tên tác giả cần tìm kiếm:');

let authorBooks = search(Auth);
if (authorBooks.length === 0) {
    console.log('Không tìm thấy sách của tác giả ' + Auth);
} else {
    console.log('Các sách của tác giả ' + Auth + ' là:');
    console.log(authorBooks);
}