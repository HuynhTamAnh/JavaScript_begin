function fibonacci(n) {
    if (n <= 1) {
        return [0, 1].slice(0, n + 1);
    } else {
        const fib = fibonacci(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
}

const n = Number(prompt('Nhập số nguyên dương:'));
const res = fibonacci(n);

console.log("Dãy Fibonacci với", n, "phần tử là:", res);
