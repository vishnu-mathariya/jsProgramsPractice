let arr = [1, 2, 4, 5];

const missingNum = () => {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
};

console.log(missingNum());

///////////////////////////////////////

let arr1 = [1, 2, 3, 5];
const findMissingNum = () => {
  let n = arr1.length + 1;
  let expSum = (n * (n + 1)) / 2;
  let actSum = 0;

  for (let i = 0; i < arr1.length; i++) {
    actSum += arr1[i];
  }

  return expSum - actSum;
};

console.log(findMissingNum());

//////////////////////////////////////

let arr2 = [2, 3, 4, 5];
const findMissingNum1 = () => {
  let n = arr2.length + 1;
  let eSum = (n * (n + 1)) / 2;
  let aSum = 0;

  for (let i = 0; i < arr2.length; i++) {
    aSum += arr2[i];
  }

  return eSum - aSum;
};

console.log(findMissingNum1());


///////////////////////////////////////

let arr3 = [3,1,5,2,4,7,9,6]

const findMissNum = () => {
    let n = arr3.length+1
    let expSum = (n*(n+1))/2
    let actSum = 0

    for(let i=0; i < arr3.length; i++){
        actSum += arr3[i]
    }

    return  expSum - actSum
}

console.log(findMissNum());


///////////////////////////////////////




const findMissNum5 = (inpArr) =>{

    let n = inpArr.length+1

    let expSum = (n*(n+1))/2

    let actSum = 0

    for(let i=0; i< inpArr.length; i++){
        actSum += inpArr[i]
    }

    return expSum - actSum  

}

console.log(findMissNum5([1,2,3,4,5]));
