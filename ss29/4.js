
var str=prompt('nhập 1 chuỗi bất kì:');

var word=prompt('nhập 1 kí tự bất kì cần tìm:');


function count(str,word){
    let n=0;
    for(let i=0;i<str.length;i++){
        if(word==str[i]){
            n++;
        }
    }
    console.log(`số lần xuất hiện của kí tự "${word}" là :`,n);
}

count(str,word);
