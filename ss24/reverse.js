var n = Number(prompt('Nhập vào số nguyên dương:'));

if (isNaN(n) || n <= 0 || n % 1 !== 0) {
    console.log("nhập một số nguyên dương bạn ơiiiii.");
} else {
    var soDao = 0;
    var soNhap = n;

    while (n > 0) {
        var donVi = n % 10; 
        soDao = soDao * 10 + donVi; 
        n = Math.floor(n / 10); // Loại bỏ chữ số cuối cùng
    }

    console.log("Số đảo ngược của " + soNhap + " là: " + soDao);
}
