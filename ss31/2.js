function largestOfArrs(...args) {
    return args.map(arr => Math.max(...arr));
}

console.log(largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
console.log(largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]));
console.log(largestOfArrs());
