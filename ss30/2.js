var n = Number(prompt('Nhập số nguyên n bất kỳ: '));

function odd(n) {
    let sum = 0;
    let start = 1;

    if (n % 2 === 0) {
        n--;
    }

    while (sum + start <= n) {
        console.log(start);
        sum += start;
        start += 2;
    }
}

if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    odd(n);
}
