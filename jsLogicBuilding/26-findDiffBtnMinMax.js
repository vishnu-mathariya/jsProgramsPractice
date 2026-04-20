const findDiffBtnMinMax = (inpArr) => {
  let minNum = inpArr[0];
  let maxNum = inpArr[0];

  for (let i = 1; i < inpArr.length; i++) {
    if (inpArr[i] < minNum) {
      minNum = inpArr[i];
    }
    if (inpArr[i] > maxNum) {
      maxNum = inpArr[i];
    }
  }

  return maxNum - minNum;
};

console.log(findDiffBtnMinMax([-10, 2, 3, 10, 133]));
