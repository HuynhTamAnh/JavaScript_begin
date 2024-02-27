let arr=[1,2,3,1,5,6,7,1,9];

let n=Number(prompt('nhập giá trị muốn kiểm tra'));

let count=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]===n){
        count++;
    }
}

console.log('số lần xuất hiện của số',n,"là",count,'lần');