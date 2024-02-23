var a=Number(prompt('nhập a'));
var b=Number(prompt('nhập b'));

if(a==0){
    if(b==0){
        alert('phương trình vô số nghiệm');
    }else{
        alert('phương trình vô nghiệm');
    }
}else{
    var x = -b/a;
    alert('nghiệm của phương trình là: x=' +x);
}