// Inbuilt method 

// function getSquareRoot(number){
//    return  Math.sqrt(number)
// }
// console.log(getSquareRoot(4));




// Without inbuilt method 

let getSquareRoot=(n)=>{
    for(let i=1;i<=n;i++){
        if(i*i===n){
            return i
        }
    }
    return "Num is not square root"
}
console.log(getSquareRoot(16));
console.log(getSquareRoot(25));
console.log(getSquareRoot(10));
console.log(getSquareRoot(4));
console.log(getSquareRoot(5));




