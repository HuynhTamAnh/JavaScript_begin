let Student = [];

const num=Number(prompt('nhập số lượng sinh viên:'));
for (let i = 0; i < num; i++) {
    let student_lit = {
        id: prompt('Nhập id:'),
        name: prompt('Nhập tên:'),
    };
    Student.push(student_lit);
}

Student.forEach(function(student_lit, index) {
    let studentInfo = `Học sinh thứ ${index + 1}: { ID: ${student_lit.id}, Tên: ${student_lit.name}}`;
    console.log(studentInfo);
});