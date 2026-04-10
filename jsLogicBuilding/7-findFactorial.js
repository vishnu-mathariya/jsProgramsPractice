// const findFactorial = (num) => {
//   let result = 1;
//   let i=0
//   if (num >= i) {
//     for (let i = 1; i <= num; i++) {
//       result = result * i;
//     }
//   } else {
//    return  ("Num is not valid");
//   }

//   return result;
// };

// console.log(findFactorial(0));


// ===================================


const findFactorial = (num) =>{
    if(num < 0){
        return "Num is no valid ";
    }
    let result =1;
    for (let i =1; i<=num;i++){
        result= result*i
    }
    return result;
}

console.log(findFactorial(0));
