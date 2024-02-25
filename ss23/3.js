const number = Number(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(number) || number <= 0) {
  alert("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
  } else if (number % 3 === 0) {
    console.log('Fizz');
  } else if (number % 5 === 0) {
    console.log('Buzz');
  }
}
