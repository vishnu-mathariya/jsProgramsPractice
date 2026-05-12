const calculator = (a, b, operations) =>{
    return operations(a,b)
}

const add = (a, b) =>{
    return a + b

}

const multiply = (a, b) =>{
    return a * b
}

console.log(calculator(2,3, add))
console.log(calculator(2,3, multiply))



