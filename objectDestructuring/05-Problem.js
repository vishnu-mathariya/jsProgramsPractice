const obj = {
    name : "Vishnu",
    address : {
        city :"Pune",
        pincode : 411108
    }
}

const {name, address : {city : userCity}} = obj

console.log(name, userCity );
