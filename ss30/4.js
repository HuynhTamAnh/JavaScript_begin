var n=Number(prompt('nhập số lượng phần tử trong mảng'));
var arr=[];
for (let i=0;i<n;i++){
    var num=Number(prompt('nhập 1 số nguyên bất kì:'));
    arr.push(num);
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], "là số nguyên tố:", isPrime(arr[i]));
}