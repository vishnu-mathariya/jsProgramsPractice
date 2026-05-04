const user ={
    name: "Vishnu",
    age: 25
}

const {name, age} = user

console.log({name}, {age});



/////////////////////////////

const products = {
    title: "Laptop",
    price: 50000,
    brand: "Lenovo"
}

const {title, price, brand} = products

console.log(`Title : ${title}`);
console.log(`Price : ${price}`);
console.log(`Brand : ${brand}`);



////////////////////////////////////////


// Rename variable

const user1 = {
    name :"Vishnu"
}

const {name: userName} =user1

console.log(userName);
