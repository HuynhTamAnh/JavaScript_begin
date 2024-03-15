const obj={name:'tâm anh',age:19};
localStorage.setItem('user',JSON.stringify(obj));

const outp=JSON.parse(localStorage.getItem('user'));
console.log(outp);