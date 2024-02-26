
const a = Number(prompt('nhập số nguyên dương a:'));
const b = Number(prompt('nhập số nguyên dương b:'));


if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập hai số nguyên.");
} else {
   
    let sum = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    
    console.log("Tổng các số nguyên từ " + start + " đến " + end + " là: " + sum);
}
