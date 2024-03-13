document.getElementById('btn').addEventListener('click',function(){
    var nhap=document.getElementById('inp').value;
    var outp=document.createElement('li');
    outp.textContent=nhap;
    document.getElementById('list').appendChild(outp);
});