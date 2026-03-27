const isPrimeNum = (num)=>{
    let isPrime = true
if(num === 1 || num < 1)
    return "Num is not prime"
else {
    for (let i=2; i<=num /2; i++){
        if(num % i === 0)
            isPrime =false
    }
    if(isPrime)
        return "num is prime"
    else
        return "num is not prime"

}
}

console.log(isPrimeNum(2))