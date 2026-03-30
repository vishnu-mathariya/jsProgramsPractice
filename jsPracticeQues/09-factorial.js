// factorial of 3  3 * 2 * 1


// const factorial = (n) => {
//     let result =1;

//     for(let i=1; i<=n; i++){
//         result = result *i;
//     }
//     return result ;
// }

// console.log(factorial(3));



// ======================================================



// const factorial = (n) => {
//     let result =1;
//     let i=1;

//     while (i<=n){
//         result *= i;
//         i++;
//     }

//     return result;
// }

// console.log(factorial(10));



// =======================================================


// Using Recursion

const factorial =(n) => {
    if (n===0 || n===1) return 1;

    return n* factorial (n - 1);
}

console.log(factorial(2));
