const user = {
    name : "Vishnu",
    age : 25
}


const {name, city = "Guest" } =user

console.log(name);
console.log(city);


