const findFactorsOfNum = (num) => {

    if(num < 1){
        throw new Error("Input num should be greater than 1")
    }
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }

  }
  return result;
};

console.log(findFactorsOfNum(6));
