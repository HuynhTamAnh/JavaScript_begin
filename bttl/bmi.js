var chieuCao= Number(prompt('Nhập chiều cao của bạn(theo cm):'));
var canNang= Number(prompt('Nhập cân nặng của bạn (theo kg):'));

var bmi= canNang/(chieuCao*chieuCao);

switch(true){
    case (bmi< 18.5):
        alert('cân nặng thấp(gầy).');
        break;
    case (bmi>=18,5 && bmi <=24.9):
        alert('bình thường');
        break;
    case (bmi >=25):
        alert('thừa cân');
        break;
    case (bmi >25 && bmi<=29.9):
        alert('tiền béo phí');
        break;
    case (bmi >=30 && bmi<=34.9):
        alert('béo phí độ I');
        break;
    case (bmi >=35 && bmi<=39.9):
        alert('béo phí độ II');
        break;
    default:
        alert('béo phì độ III');
}