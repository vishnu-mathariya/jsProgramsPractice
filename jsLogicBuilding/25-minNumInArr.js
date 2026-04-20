const findMinNum = (inpArr) => {
  let minNum = inpArr[0];
  for (let i = 1; i < inpArr.length; i++) {
    if (minNum > inpArr[i]) {
      minNum = inpArr[i];
    }
  }
  return minNum;
};

console.log(findMinNum([2, -3, 1, 0, -1]));


