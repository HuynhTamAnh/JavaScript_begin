function truncate(str, n) {
    if (str.length <= n) {
        return str;
    } else {
        return str.slice(0, n) + "...";
    }
}

console.log(truncate("This is a long string", 10)); 
console.log(truncate("Short string", 15)); 