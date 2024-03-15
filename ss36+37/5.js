var arr = [];

document.getElementById('in').addEventListener('input', function(){
    var inp = document.getElementById('in').value;
    
    if(inp){
        document.getElementById('in').style.backgroundColor = "white";
    }
});

document.getElementById('btn').addEventListener('click', function(){
    var inpValue = document.getElementById('in').value;
    arr.push(inpValue);
    
    var ulElement = document.getElementById('output');
    ulElement.innerHTML = ''; // Clear existing content

    arr.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        ulElement.appendChild(li);
    });

    document.getElementById('in').value = ''; // Clear input field
});