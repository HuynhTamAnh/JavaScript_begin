var n=Number(prompt('nhập số lượng phần tử trong mảng'));
var arr=[];
for (let i=0;i<n;i++){
    var str=prompt('nhập 1 chuỗi bất kì:');
    arr.push(str);
}

function xoaPhanTu(arr) {
    let arr0 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr0.includes(arr[i])) {
            arr0.push(arr[i]);
        }
    }
    return arr0;
}


let res= xoaPhanTu(arr);
console.log(res);

