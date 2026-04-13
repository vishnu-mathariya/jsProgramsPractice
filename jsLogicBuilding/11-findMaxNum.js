const findMaxNum = (inputArr) => {
  if (!Array.isArray || inputArr.length === 0) {
    throw new Error("Invalid input");
  }
  let maxNum = inputArr[0];

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i] > maxNum) {
      maxNum = inputArr[i];
    }
  }
  console.log(maxNum);
};

findMaxNum([1, 2, 3]);

////////////////////////////////////

const findMaxNum2 =() => {

   const maxNumber= Math.max(10,29,30)
   console.log(maxNumber);
   
}

findMaxNum2([]);

//////////////////////////////////////////


const findMaxNum3 =(inputArr) => {

   const maxNumber= Math.max(...inputArr)
   console.log(maxNumber);
   
}

findMaxNum3([1,100,300]);