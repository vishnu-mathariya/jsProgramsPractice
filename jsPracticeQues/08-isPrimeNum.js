// const isPrimeNum = (num)=>{
//     let isPrime = true
// if(num === 1 || num < 1)
//     return "Num is not prime"
// else {
//     for (let i=2; i<=num /2; i++){
//         if(num % i === 0)
//             isPrime =false
//     }
//     if(isPrime)
//         return "num is prime"
//     else
//         return "num is not prime"

// }
// }

// console.log(isPrimeNum(2))






// -------------------------------------------------




const  isPrimeNum = (num)=>{
    if(num <=1 ) 
        return false;

    for (let i =2; i<num; i++){
        if(num % i ===0) 
            return false;

    }

    return true;

}

console.log(isPrimeNum(10))





