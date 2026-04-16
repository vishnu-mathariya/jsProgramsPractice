const findSecondLargestNum = (inpArr) => {
  let largest = -Infinity;
  let secondlargest = -Infinity;
  for (let i = 0; i < inpArr.length; i++) {
    let current = inpArr[i];
    if (current > largest) {
        secondlargest = largest
      largest = current;
    } else if (current > secondlargest && current !== largest) {
      secondlargest = current;
    }
  }
  return secondlargest;
};

console.log(findSecondLargestNum([1, 2, 4, 3, 5]));




/////////////////////////////////////////




const findSecondLargestNum2 = (inputArr) =>{
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i < inputArr.length; i++){
        let current = inputArr[i]

        if(current > largest){
            secondLargest = largest
            largest =current
        } else if(current > secondLargest && current !== largest){
            secondLargest=current
        }
    }
    return secondLargest;

}

console.log(findSecondLargestNum2([-10,10,-9]));
