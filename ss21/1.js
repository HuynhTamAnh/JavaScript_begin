var namSinh= Number(prompt('Nhập năm sinh của bạn:'));

if(!isNaN(namSinh)){
    var tuoi = new Date().getFullYear() - namSinh;
    alert("Tuổi của bạn là: " + tuoi);
} else {
    alert("Câu trả lời không hợp lệ. Vui lòng nhập một số.");
}
