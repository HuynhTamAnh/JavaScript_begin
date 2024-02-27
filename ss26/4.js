var a = Number(prompt('Nhập vào số nguyên dương a:'));
var b = Number(prompt('Nhập vào số nguyên dương b:'));

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("nhập số nguyên dương đê bạn ơiiii");
} else {
    let arr = [];
    for (let i = 1; i <= Math.max(a, b); i++) {
        if (i % b == 0 || i % a == 0) {
            arr.push(i);
        }
    }
    console.log("Các số chia hết cho a hoặc b trong khoảng từ 1 đến", Math.max(a, b), "là:");
    console.log(arr);
}