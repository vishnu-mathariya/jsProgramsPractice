const countDigits = (inpDig) => {
  let count = 0;

  let str = inpDig.toString();
  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
};

console.log(countDigits(123467));

///////////////////////////////////////

const countDig = (num) => {
  let count = 0;
  let str = num.toString();

  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
};

console.log(countDig(1234566610101));
