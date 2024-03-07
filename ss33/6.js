class Jobs{
    constructor(id, title, description, completed) {
        this.id=id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

}

let Jobs=[];
function addJob() {
    let id=Jobs.length+1;
    let title=prompt('nhập tiêu đề công việc:');
    let description=prompt('nhập mô tả công việc:');
    let completed=confirm('công việc đã hoàn thành chưa?');
    let job= new Jobs(id,title,description,completed);
    Jobs.push(job);
    console.log('công việc đã được thêm vào danh sách');
}

function outp (){
    if(Jobs.length===0){
        console.log('danh sách công việc còn trống');
    }else{
        console.log('danh sách công việc:');
        Jobs.forEach(job => {
            console.log(`ID: ${job.id} - Tiêu đề: ${job.title} - Mô tả: ${job.description} - Hoàn thành: ${job.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}`);
        });
    }
}

function searchById(){
    let searchById=Number(prompt('nhập id công việc cần tìm'));
    let found=Jobs.find(job=>job.id===searchById)
    if (found){
        console.log(`Công việc có ID ${searchId}:`);
        console.log(`Tiêu đề: ${foundJob.title}`);
        console.log(`Mô tả: ${foundJob.description}`);
        console.log(`Hoàn thành: ${foundJob.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}`);
    } else {
        console.log("Không tìm thấy công việc.");
    }
}

function main() {
    let choice;
    do {
        console.log("===== CHƯƠNG TRÌNH QUẢN LÝ CÔNG VIỆC =====");
        console.log("1. Thêm mới công việc");
        console.log("2. Hiển thị danh sách công việc");
        console.log("3. Tìm kiếm công việc theo ID");
        console.log("4. Thoát chương trình");
        choice = parseInt(prompt("Nhập lựa chọn của bạn:"));
        switch (choice) {
            case 1:
                addJob();
                break;
            case 2:
                outp();
                break;
            case 3:
                searchById();
                break;
            case 4:
                console.log("Chương trình đã kết thúc.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 4);
}

main();