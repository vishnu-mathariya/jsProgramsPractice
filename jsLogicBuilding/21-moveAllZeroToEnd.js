const moveAllZeroToEnd = (inpArr) => {
  let result = [];
  let zeroCount = 0;
  for (let i = 0; i < inpArr.length; i++) {
    if (inpArr[i] !== 0) {
      result.push(inpArr[i]);
    } else {
      zeroCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
};

console.log(moveAllZeroToEnd([1, 2, 0, 3, 0, 6]));

