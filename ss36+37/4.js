//cách 1
document.getElementById('btn').addEventListener('click', function(){
    var num1 = Number(document.getElementById('in1').value);
    var num2 = Number(document.getElementById('in2').value);
    var sum = num1 + num2;
    document.getElementById('in3').value = sum;
});

//cách 2
document.getElementById('btn').addEventListener('click', function(){
    var num1 = parseFloat(document.getElementById('in1').value);
    var num2 = parseFloat(document.getElementById('in2').value);
    var sum = num1 + num2;
    document.getElementById('in3').innerHTML = sum;
});
