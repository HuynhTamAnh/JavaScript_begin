const a = Number(prompt("Nhập vào một số a:"));
const b = Number(prompt("Nhập vào một số b:"));


if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {

  console.log("Các số nguyên dương từ 1 đến", number, "là:");
  for (let i = 1; i <= a; i++) {
    if(a%b==0){
        console.log(i);
    }
  }
}