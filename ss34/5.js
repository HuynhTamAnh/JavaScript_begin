let listItems = ["List item number 1", "List item number 2", "List item number 3"];

let ul = document.createElement('ul');

for (let i = 0; i < listItems.length; i++) {
    let li = document.createElement('li');
    li.textContent = listItems[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);