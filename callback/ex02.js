const  calculator = (a,b, operation) => {
    return operation(a, b)
}

const add = (x,y) =>{
    return x + y
}

const multiply = (x, y) =>{
    return x * y
}

console.log(calculator(2,3,add));
console.log(calculator(2,3,multiply));

