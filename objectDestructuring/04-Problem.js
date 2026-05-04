const Stud = {
    name : "Vishnu",
    address : {
        city: "Pune",
        pincode: 411008
    }
}

const {name, address: {city}} = Stud


console.log(name , city);
