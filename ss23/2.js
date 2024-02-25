const number = Number(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(number) || number <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
  } else {
    let giaiThua=1;
    for (let i = 1; i <= number; i++) {
        giaiThua*=i;
    }
    console.log(giaiThua);
  }