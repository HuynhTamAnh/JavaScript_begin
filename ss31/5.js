function chunkArrayInGroups(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i ++) {
        result.push(arr.splice(0, n));
    }
    return result;
}
const n=Number(prompt('nhập số phần tử trong 1 mảng:'))


console.log(chunkArrayInGroups(["a", "b", "c", "d"], n)); 
console.log(chunkArrayInGroups([1, 2, 3, 4, 5], n)); 
