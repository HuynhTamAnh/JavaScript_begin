class Product {
    constructor(id, name, price, expiryDate) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.expiryDate = expiryDate;
    }
  }
  
class Employee {
    constructor(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
}
  
class Invoice {
    constructor(id, productSold, employeeId) {
      this.id = id;
      this.productSold = productSold;
      this.employeeId = employeeId;
    }
}
  
let products = [];
let employees = [];
let invoices = [];
  
function addProduct() {
    let id = products.length + 1;
    let name = prompt('Nhập tên sản phẩm:');
    let price = parseFloat(prompt('Nhập giá sản phẩm:'));
    let expiryDate = prompt('Nhập hạn sử dụng (dd/mm/yyyy):');
    let product = new Product(id, name, price, expiryDate);
    products.push(product);
    console.log('Sản phẩm đã được thêm vào cửa hàng');
}

function addEmployee() {
    let id = employees.length + 1;
    let name = prompt('Nhập tên nhân viên:');
    let age = Number(prompt('Nhập tuổi nhân viên:'));
    let employee = new Employee(id, name, age);
    employees.push(employee);
}
  
function addInvoice() {
    if (employees.length === 0) {
        console.log("Không có nhân viên nào trong cửa hàng. Vui lòng thêm nhân viên trước khi tạo hóa đơn.");
        return;
    }

    let productsSold = [];
    let totalValue = 0;
    let moreProducts = true;
    while (moreProducts) {
        let productId = parseInt(prompt('Nhập ID sản phẩm đã bán:'));
        let product = products.find(item => item.id === productId);
        if (product) {
            let quantity = parseInt(prompt(`Nhập số lượng sản phẩm ${product.name} đã bán:`));
            let value = product.price * quantity;
            totalValue += value;
            productsSold.push({ product, quantity, value });
        } else {
            console.log('Sản phẩm không tồn tại.');
        }
        moreProducts = confirm('Có thêm sản phẩm nữa không?');
    }

    let employeeId = parseInt(prompt('Nhập ID nhân viên đã bán sản phẩm:'));
    let employee = employees.find(item => item.id === employeeId);
    if (!employee) {
        console.log("Không tìm thấy thông tin nhân viên. Vui lòng kiểm tra lại ID nhân viên hoặc thêm mới nhân viên.");
        return;
    }

    let invoice = new Invoice(invoices.length + 1, productsSold, employeeId);
    invoices.push(invoice);
    console.log('Hóa đơn đã được thêm vào cửa hàng.');
}

  
function outp() {
    console.log('===== THÔNG TIN TỔNG QUAN CỬA HÀNG =====');
    console.log(`Số lượng sản phẩm trong cửa hàng: ${products.length}`);
    console.log(`Số lượng nhân viên trong cửa hàng: ${employees.length}`);
    console.log('===== DANH SÁCH HÓA ĐƠN =====');
    for (let invoice of invoices) {
        console.log(`Hóa đơn số ${invoice.id}:`);
        console.log('Sản phẩm đã bán:');
        for (let soldProduct of invoice.productSold) {
            let product = soldProduct.product;
            let productName = products.find(item => item.id === product.id).name;
            console.log(`- Tên sản phẩm: ${productName}, Số lượng: ${soldProduct.quantity}, Giá: ${product.price}`);
        }
        let employee = employees.find(item => item.id === invoice.employeeId);
        if (employee) {
            console.log(`Tên nhân viên: ${employee.name}`);
        } else {
            console.log("Không tìm thấy thông tin nhân viên.");
        }
    }
}

  
function main() {
    let choice;
    do {
        console.log("===== CHƯƠNG TRÌNH QUẢN LÝ CỬA HÀNG =====");
        console.log("1. Thêm mới sản phẩm");
        console.log("2. Thêm mới nhân viên");
        console.log("3. Thêm mới hóa đơn");
        console.log("4. Hiển thị thông tin tổng quan cửa hàng");
        console.log("5. Thoát chương trình");
        choice = parseInt(prompt("Nhập lựa chọn của bạn:"));
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                addEmployee();
                break;
            case 3:
                addInvoice();
                break;
            case 4:
                outp();
                break;
            case 5:
                console.log("Chương trình đã kết thúc.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 5);
}

main();