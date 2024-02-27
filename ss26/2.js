let arr=[1,2,3,4,5,6,7,8,9];

let n=Number(prompt('nhập giá trị muốn tìm'));

let found=false;

for(let i=0;i<arr.length;i++){
    if(arr[i]===n){
        console.log('phần tử', n, 'cần tìm nằm ở vị trí thứ',i);
        found=true;
        break;
    }
}

if(!found){
    console.log('không tìm thấy phần tử bạn muốn tìm');
}