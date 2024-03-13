document.getElementById('btn').addEventListener('click',function(){
    var ans=document.getElementById('vb').value;
    if(ans.length>10){
        alert('không hợp lệ!');
    }else{
        alert('thành công');
    }
})