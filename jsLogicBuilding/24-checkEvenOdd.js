const checkEvenOdd = (inpNum) => {
  if (inpNum % 2 === 0) {
    return "Even";
  } else if (inpNum % 2 !== 0) {
    return "Odd";
  }
};

console.log(checkEvenOdd(2));

/////////////////////////////////////

const checkEvenOdd1 = (inpNum) => {
  if (inpNum % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkEvenOdd1(5));

////////////////////////////////////

const checkEvenOddNum = (inpNum) => {
  return inpNum % 2 === 0 ? "Even" : "Odd";
};

console.log(checkEvenOddNum(1001));
