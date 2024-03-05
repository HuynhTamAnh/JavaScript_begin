let information={
    id:"",
    name:"",
    price:"",
    quality:""
}

information.id=prompt('nhập id:');
information.name=prompt('nhập tên:');
information.price=Number(prompt('nhập giá:'));
information.address=prompt('nhập chất lượng:');

console.log('id: '+ information.id);
console.log('name: '+ information.name);
console.log('phone: '+ information.price);
console.log('address: '+ information.quality);