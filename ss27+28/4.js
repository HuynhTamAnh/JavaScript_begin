var arr=[1,3,5,2,6,9,4];
console.log('mảng ban đầu là:',arr);
let mangLe=[];

for(let i=0;i<arr.length;i++){
    
    if (arr[i]%2!==0){
        mangLe.push(arr[i]);
        arr.splice(i,1);
        i--;
    }
}

console.log('mảng chứa các phần tử chẵn:',arr);
console.log('mảng chứa các phần tử lẻ:', mangLe);