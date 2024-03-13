document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();

    var id = document.getElementById('Id').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    if (id.length !== 6) {
        alert('ID phải gồm 6 ký tự.');
        return false;
    }

    if (name === '') {
        alert('Tên không được để trống.');
        return false;
    }

    if (age < 18) {
        alert('Số tuổi phải lớn hơn hoặc bằng 18.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Địa chỉ email không hợp lệ.');
        return false;
    }

    let studentInfo = document.createElement("p");
    studentInfo.textContent =
        "Student ID: " +
        id +
        "\nStudent Name: " +
        name +
        "\nAge: " +
        age +
        "\nPhone: " +
        phone +
        "\nEmail: " +
        email;

    document.getElementsByClassName("output")[0].appendChild(studentInfo);
});