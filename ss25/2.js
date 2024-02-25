
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);


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
