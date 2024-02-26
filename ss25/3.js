
const a = Number(prompt('nhập số nguyên dương a:'));
const b = Number(prompt('nhập số nguyên dương b:'));


if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập hai số nguyên.");
} else {
  
    const result = Math.pow(a, b);
    
    
    console.log("Kết quả của " + a + "^" + b + " là: " + result);
}
