const num=[1,2,5];

function isEven(num){
    for(let i=0;i<num.length;i++){
        if(num[i]%2===0){
            console.log(`số "${num[i]}" là số chẵn`);
        }else{
            console.log(`số "${num[i]}" là số lẻ`);
        }
    }
   
}

isEven(num);