// const findLargestNum =(inputArr) => {
//     let maxNum =inputArr[0]
//     for(let i=1; i <= inputArr.length; i++ ){
//         if(inputArr[i] > maxNum){
//         maxNum= inputArr[i]
//         }
//     }
//     console.log(maxNum);

// }

// findLargestNum([1,2,3])

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const findMaxNum = (inputNum) => {
//   let maxNum = inputNum[0];

//   for (let i = 1; i < inputNum.length; i++) {
//     if (inputNum[i] > maxNum) {
//       maxNum = inputNum[i];
//     }
//   }
//   console.log(maxNum);
// };

// findMaxNum([3, 4, 2]);




const findMaxNum =(inputArr) =>{
    let maxNum =inputArr[0]
    for(let i=1; i< inputArr.length;i++){
        if(inputArr[i] > maxNum){
            maxNum=inputArr[i]
        }
    }
    console.log(maxNum);
    
}

findMaxNum([10,20,30])