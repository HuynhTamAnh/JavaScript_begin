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