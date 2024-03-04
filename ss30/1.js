var n=Number(prompt('nhập số lượng phần tử trong mảng'));
var arr=[];
for (let i=0;i<n;i++){
    var num=prompt('nhập 1 chuỗi bất kì:');
    arr.push(num);
}

function isDoiXung(arr) {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


console.log("Mảng vừa nhập có đối xứng không???", isArrayDoiXung(arr));