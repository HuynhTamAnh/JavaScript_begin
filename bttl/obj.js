// const obj={
//     name:'ai do',
//     age:20,
//     sayHi:function(){
//         return 'hellu'
//     }
// }
// console.log(obj);

// function Student(name, age){
//     this.name=name
//     this.age=age
// }

// const student1= new Student('anh',18)
// console.log(student1);

// const person={
//     firstName:"John",
//     lastName:"Ne",
//     set fullName(name){
//         const parts=name.split(" ");
//         this.firstName=parts[0];
//         this.lastName=parts[1];
//     },
// };

// person.fullName="Thanh Trung";
// console.log(person.firstName);
// console.log(person.lastName);

let products = [];

const num=Number(prompt('nhập số lượng sản phẩm:'));
for (let i = 0; i < num; i++) {
    let product = {
        id: prompt('Nhập id:'),
        name: prompt('Nhập tên:'),
        price: Number(prompt('Nhập giá:'))
    };
    products.push(product);
}

products.sort(function(a, b) {
    return a.price - b.price;
});

console.log('Danh sách sản phẩm sau khi sắp xếp theo giá cả tăng dần là:');

products.forEach(function(product, index) {
    let productInfo = `Sản phẩm ${index + 1}: { ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price} }`;
    console.log(productInfo);
});

