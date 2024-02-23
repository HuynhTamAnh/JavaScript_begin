var num = Number(prompt('Nhập 1 số bất kì:'));

if (isNaN(num)) {
    alert('Không phải số!');
} else {
    if (num % 2 === 0) {
        alert('Số chẵn');
    } else {
        alert('Số lẻ');
    }
}