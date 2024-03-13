//cách 1:
document.getElementById('btn').addEventListener('click',function(){
    var out1=document.getElementById('textInp').value
    document.getElementById('outp1').textContent=out1;
});

//cách 2
document.getElementById('textInp').addEventListener('input',function(){
    var out2=this.value;
    document.getElementById('out2').innerHTML=out2;
})

