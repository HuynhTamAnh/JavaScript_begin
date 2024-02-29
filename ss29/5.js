var n=Number(prompt('nhập số lượng phần tử trong mảng'));
var arr=[];
for (let i=0;i<n;i++){
    var str=prompt('nhập 1 chuỗi bất kì:');
    arr.push(str);
}

function outp(arr,str){
    console.log('phần tử trong mảng vừa nhập là:',arr);
}

outp(arr,str);