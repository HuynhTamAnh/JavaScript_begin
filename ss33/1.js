var people={
    person1:{
        name:"An",
        age:18,
        address:"đoán xem",
    },
    person2:{
        name:"Anh",
        age:19,
        address:"đoán xem",
    },
};

for (let person in people) {
    console.log(person + ": ");
    for (let inf in people[person]) {
        console.log("  " + inf + ": " + people[person][inf]);
    }
}

delete people.person1.age;
delete people.person2.age;
people.person1.birthday="30/12/2005";
people.person2.birthday="15/2/2005";

console.log('sau khi sửa thông tin:');
for (let person in people) {
    console.log(person + ": ");
    for (let inf in people[person]) {
        console.log("  " + inf + ": " + people[person][inf]);
    }
}
