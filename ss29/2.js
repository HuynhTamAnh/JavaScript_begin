var n=Number(prompt('nhập số lượng phần tử trong mảng'));
var arr=[];
for (let i=0;i<n;i++){
    var str=prompt('nhập 1 chuỗi bất kì:');
    arr.push(str);
}
// var str=['a','bc','5'];

var max=str[0];


function maxLength(str){
    for(let i=0;i<str.length;i++){
        if(str[i].length>max.length){
            max=str[i];
        }
    }
    console.log('phần tử có độ dài lớn nhất là:',max);
}

maxLength(arr);