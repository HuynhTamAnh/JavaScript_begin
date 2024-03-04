const str=prompt('nhập vào 1 chuỗi bất kì');
const res= sort(str);

function sort(str){
    const letters = [];
    const digits = [];
    const specials = [];

    for(let i=0;i<str.length;i++){
        const char = str[i];
        if (/[a-zA-Z]/.test(char)) {
            letters.push(char);
        } else if (/\d/.test(char)) {
            digits.push(char);
        } else {
            specials.push(char);
        }
    }
    return letters.concat(digits, specials);
}

console.log("Kết quả sau khi sắp xếp ký tự:", res);