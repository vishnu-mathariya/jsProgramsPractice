const sumOfDigits = (inputNum) => {
    if(inputNum < 1){
        throw new Error ("Input num must be positive")

    }

   const inputNumString= inputNum.toString();  //convert into string 

   const splittedInputSting = inputNumString.split(''); // divided num 

   let sumOfDigits = 0;

   splittedInputSting.forEach(num =>{
    sumOfDigits = sumOfDigits + parseInt(num) 
    
   })
   return sumOfDigits

}

console.log(sumOfDigits(29));
