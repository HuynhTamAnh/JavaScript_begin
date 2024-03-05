var n=Number(prompt('nhập số lượng phần tử trong mảng'));
var arr=[];
for (let i=0;i<n;i++){
    var num=Number(prompt('nhập 1 số dương bất kì:'));
    arr.push(num);
}

function triangleArr(arr){
    var count = 0;
    var tri=[];

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]) {
                    count++;
                    tri.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return tri;
}

var arrCount=triangleArr(arr);
console.log('số lượng tam giác có thể tạo ra từ mảng là:'+ arrCount.length);
arrCount.forEach(triangle => {
    console.log(triangle.join(', '));
});