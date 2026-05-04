const obj = {
    name :"Vishnu",
    address : {
        city : "Pune"
    }
}

const obj2 = {...obj}

obj2.address.city = "Mumbai"

console.log(obj);
console.log(obj2);

