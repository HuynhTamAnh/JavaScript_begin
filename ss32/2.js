let information={
    id:"",
    name:"",
    phone:"",
    address:""
}

information.id=prompt('nhập id:');
information.name=prompt('nhập tên:');
information.phone=Number(prompt('nhập số điện thoại:'));

delete information.address;
information.email=prompt('nhập email:');

console.log('id: '+ information.id);
console.log('name: '+ information.name);
console.log('phone: '+ information.phone);
console.log('email:' +information.email);




