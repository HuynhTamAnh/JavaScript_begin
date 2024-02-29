var str=prompt('nhập 1 chuỗi bất kì:');

function count(str){
    const word= str.split(' ');
    const noSpace= word.join('');
    return noSpace.length;
}

console.log(`số kí tự không tính khoảng trắng trong chuỗi "${str}" được nhập là `, count(str));