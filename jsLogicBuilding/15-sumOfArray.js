// const sumOfArr = (inpArr) =>{
// let sum = 0
// for(let i=0; i < inpArr.length; i++){
//     sum+=inpArr[i]
// }
// console.log(sum);


// }
// sumOfArr([1,2,30])






// ======================================



let sum =0
const sumOfArr = (inputArr)=>{
    for(let i=0; i<inputArr.length; i++){
        sum += inputArr[i]
    }
    return sum;
}

console.log(sumOfArr([90,2,1]));
