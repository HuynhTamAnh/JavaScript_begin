
const number = Number(prompt('nhập số nguyên dương:'));


if (isNaN(number) || number <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
   
    for (let i = 2; i <= number; i += 2) {
        console.log(i * i);
    }
}
