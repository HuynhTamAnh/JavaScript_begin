
const number = Number(prompt("Nhập vào một số nguyên dương:"));


if (isNaN(number) || number <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {

  console.log("Các số nguyên dương từ 1 đến", number, "là:");
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}
