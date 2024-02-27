// var a = Number(prompt('Nhập vào số nguyên dương a:'));

// if (isNaN(a) || a <= 0 ) {
//     console.log("nhập số nguyên dương đê bạn ơiiii");
// } else {
    let arr=[1,2,3,4,5];
    let arrNguoc = [];
    for(let i=arr.length-1;i>=0;i--){
        arrNguoc.push(arr[i]);
    }
    console.log(arrNguoc);
// }