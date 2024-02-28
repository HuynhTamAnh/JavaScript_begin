let str=prompt('nhập 1 chuỗi');
let res=[];
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
        res.push(str.slice(i,j));
    }
}
console.log(res);