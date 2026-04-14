const findLargestNum =(inputArr) => {
    let maxNum =inputArr[0]
    for(let i=1; i <= inputArr.length; i++ ){
        if(inputArr[i] > maxNum){
        maxNum= inputArr[i]
        }
    }
    console.log(maxNum);
    
}

findLargestNum([1,2,3])


