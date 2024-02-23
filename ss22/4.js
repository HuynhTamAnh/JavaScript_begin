var nam=Number(prompt('nhập năm:'));

if ((nam %100!==0 && nam%4===0) || nam % 400 === 0){
    alert('năm nhuận');
} else{
    alert('không phải năm nhuận');
}