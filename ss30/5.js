function vietHoaChuCuoi(str) {
    
    const words = str.split(" ");
    
    const vietHoa = words.map(function(word) {
        const lastChar = word.charAt(word.length - 1).toUpperCase();
        return word.slice(0, -1) + lastChar;
    });
    
    return vietHoa.join(" ");
}

const inp = prompt('Nhập vào một chuỗi bất kỳ:');
const res = vietHoaChuCuoi(inp);

console.log("Kết quả sau khi viết hoa ký tự cuối cùng của mỗi từ:", res);