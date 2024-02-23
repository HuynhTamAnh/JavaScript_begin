var a=Number(prompt('nhập cạnh thứ nhất'));
var b=Number(prompt('nhập cạnh thứ 2'));
var c=Number(prompt('nhập cạnh thứ 3'));

if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    alert("Độ dài các cạnh nhập vào hợp lệ và tạo thành một tam giác.");
} else {
    alert("Độ dài các cạnh nhập vào không hợp lệ.");
}