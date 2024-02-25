var a=Number(prompt('nhập a'));
var b=Number(prompt('nhập b'));

if (a % b == 0) {
    alert(a + " chia hết cho " + b);
} else if (b % a === 0) {
    alert(b + " chia hết cho " + a);
} else {
    alert("Không có số nào chia hết cho số kia.");
}