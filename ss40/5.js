function registerUser() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').vakue;
    let password = document.getElementById('password').value;
    if (username && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({username, email, password});
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }
}

function displayUsers() {
    let usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';
    let users = JSON.parse(localStorage.getItem('users')) || [];
    for (let i = 0; i < users.length; i++) {
        usersDiv.innerHTML += `<p>${users[i].username}</p>`;
    }
}

window.onload = displayUsers;