var phoneBook={
    contact1:{
        name:"Alice",
        phone:"123-456-7890",
        email:"alice@gmail.com",
        displayInfo: function(){
           return 'hé lô mình là'+this.name 
        },
    },
    contact2:{
        name:"Bob",
        phone:"987-654-3210",
        email:"bob@gmail.com",
        displayInfo: function(){
            return 'hé lô mình là'+this.name 
         },
    },
};

for (let contact in phoneBook) {
    console.log(contact + ": ");
    for (let key in phoneBook[contact]) {
        console.log("  " + key + ": " + phoneBook[contact][key]);
    }
}