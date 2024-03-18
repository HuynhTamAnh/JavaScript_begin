 // Kiểm tra xem trình duyệt có hỗ trợ Local Storage không
 if (typeof(Storage) !== "undefined") {
    // Nếu có, thêm sự kiện lắng nghe khi form được gửi đi
    document.getElementById("infoForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định
        // Lấy giá trị từ các trường input
        var fullName = document.getElementById("fullName").value;
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;
        // Tạo một đối tượng chứa thông tin cá nhân
        var personalInfo = {
            fullName: fullName,
            age: age,
            email: email
        };
        // Lấy dữ liệu đã lưu từ Local Storage
        var savedInfo = JSON.parse(localStorage.getItem("personalInfo")) || [];
        // Thêm thông tin mới vào mảng
        savedInfo.push(personalInfo);
        // Lưu mảng mới vào Local Storage
        localStorage.setItem("personalInfo", JSON.stringify(savedInfo));
        // Gọi hàm hiển thị thông tin
        displayInfo();
        // Xóa nội dung của form
        document.getElementById("infoForm").reset();
    });

    // Hàm hiển thị thông tin từ Local Storage
    function displayInfo() {
        var infoContainer = document.getElementById("displayInfo");
        infoContainer.innerHTML = ""; // Xóa nội dung cũ
        var savedInfo = JSON.parse(localStorage.getItem("personalInfo")) || [];
        // Duyệt qua mảng thông tin và hiển thị ra màn hình
        savedInfo.forEach(function(person, index) {
            var infoDiv = document.createElement("div");
            infoDiv.textContent = "Person " + (index + 1) + ": " + person.fullName + " - Age: " + person.age + " - Email: " + person.email;
            infoContainer.appendChild(infoDiv);
        });
    }

    // Gọi hàm hiển thị thông tin lúc tải trang
    displayInfo();
} else {
    // Nếu trình duyệt không hỗ trợ Local Storage
    alert("Trình duyệt của bạn không hỗ trợ Local Storage!");
}