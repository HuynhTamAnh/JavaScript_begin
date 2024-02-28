const a = Number(prompt('Nhập vào số nguyên dương a:'));
const b = Number(prompt('Nhập vào số nguyên dương b:'));

let min = Math.min(a, b);
let max = Math.max(a, b);


const numbers = [];
for (let i = min; i <= max; i++) {
    numbers.push(i);
}


console.log(`Các số nguyên từ ${min} đến ${max} là:`, numbers);