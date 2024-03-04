var str=prompt('nhập 1 chuỗi bất kì:');
var word=prompt('nhập 1 kí tự bất kì:');

function count1(str,word){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===word){
            count++;
        }
    }
    return count;
}

let res=count1(str,word);
console.log(`số lần xuất hiện của kí tự "${word}" là:`, res);