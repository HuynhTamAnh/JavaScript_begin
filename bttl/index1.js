// const num= Number(prompt('Nhập số vô đê bạn ơiii'));
// if(num>=8){
//     alert('giỏi quá bạn ơii');
// }else if(num<8 && num>=7){
//     alert('khá thôi bạn ơii');
// }else if(num<7 && num>=5){
//     alert('trung bình thôi bạn ơii');
// }else {
//     alert('yếu quá bạn ơii');
// }

var currentTime = new Date();

var hours = currentTime.getHours();
// var minutes = currentTime.getMinutes();
// var seconds = currentTime.getSeconds();

// const hour=Number(prompt('Nhập số giờ vô bạn ơii'));

switch (true) {
    case (hours < 10):
            alert('Good morning');
            break;
    case (hours < 20):
            alert('Good day');
            break;
    case (hours <= 23):
            alert('Good evening');
            break;
    default:
            alert('Nhập lại');
}