var arr=[1,3,5,2,6,9,4];
console.log(arr);

var max=arr[0];

for(let i=0;i<arr.length;i++){
    if (arr[i]>max){
        max = arr[i];
    }
}

console.log('phần tử lớn nhất trong mảng là', max);