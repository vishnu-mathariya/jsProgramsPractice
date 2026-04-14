const isPalindrome = (inputString) =>{
    for (let i=0; i <= inputString.length /2 ;i++){
        if(inputString[i] !== inputString[inputString.length-1-i]){
            return false;
        }
        
    }
    return true;
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("Vishnu"))





