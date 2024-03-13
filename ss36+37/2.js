document.getElementById('btn').addEventListener('click',function(){
    var button=document.getElementById('btn');
    if (button.textContent === 'On') {
        button.textContent = 'Off';
    } else {
        button.textContent = 'On';
    }
})