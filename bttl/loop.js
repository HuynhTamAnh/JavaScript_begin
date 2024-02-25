let total=0;
let inp;

do{
    inp=Number(prompt('nhập 1 số dương bất kì: '));
    if(!isNaN(inp) && inp>0){
        total+=inp;
    }else{
        break;
    }

}while(true);
alert('tổng các số nguyên dương là: ' + total);