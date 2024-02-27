let arr = [1, 'a', 2, 'b', 3, 'c'];


let hasInteger = false;


console.log("Các số nguyên trong mảng là:");
for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
        console.log(arr[i]);
        hasInteger = true;
    }
}


if (!hasInteger) {
    console.log("Trong mảng không tồn tại số nguyên");
}
