let information={
    id:"",
    name:"",
    phone:"",
    address:""
}

information.id=prompt('nhập id:');
information.name=prompt('nhập tên:');
information.phone=Number(prompt('nhập số điện thoại:'));
information.address=prompt('nhập địa chỉ:');

console.log('id: '+ information.id);
console.log('name: '+ information.name);
console.log('phone: '+ information.phone);
console.log('address: '+ information.address);