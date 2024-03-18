function loginUser() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').vakue;
    let password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.username === username && user.email === email && user.password === password);
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        document.getElementById('message').textContent = 'Đăng nhập thành công!';
    } else {
        document.getElementById('message').textContent = 'Thông tin không chính xác!';
    }
}