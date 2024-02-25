
const number = parseInt(process.argv[2]);


if (isNaN(number) || number <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
   
    for (let i = 2; i <= number; i += 2) {
        console.log(i * i);
    }
}
