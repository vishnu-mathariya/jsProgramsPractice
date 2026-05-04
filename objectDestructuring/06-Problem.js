const obj = {
    name : "Vishnu",
    address : {
        pincode : 411008,

    }
}

const {name , address : {city = "Mumbai"}} = obj

console.log(name, city);
