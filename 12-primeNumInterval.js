function isPrime (num) {
    if(num <= 1) 
        return false
    for (let i=2; i<= num /2; i++){
        if(num % i===0)
            return false
    }

    return true
}

let lowerLimit = 11, upperLimit =100
for (let i=lowerLimit; i<= upperLimit; i++){
    if(isPrime(i))
        console.log(i);
        
}