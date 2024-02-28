const n=Number(prompt('nhập vào 1 số nguyên n:'));

if(isNaN(n)|| n<=0){
    console.log('phải nhập số nguyên dương');
}else{
    if(n>=0){
        let fib=[0,1];
        for(let i=2;i<=n;i++){
            fib[i]=fib[i-1]+fib[i-2];
        }
        console.log("Số Fibonacci thứ", n, "là:", fib[n]);
    }
}