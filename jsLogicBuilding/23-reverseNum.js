const reverseNum = (inpNum) => {
  let str = inpNum.toString();
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseNum(1234));

////////////////////////////////

const reversedNum = (inpNum) => {
  let str = inpNum + "";

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

console.log(reversedNum(78866));
