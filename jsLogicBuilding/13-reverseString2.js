const reverseStr = (inputStr) => {
  let str = "";

  for (let i = inputStr.length - 1; i >= 0; i--) {
    str += inputStr[i];
  }

  console.log(str);
};

reverseStr("vishnu");

///////////////////////////////////////////////////

const reverseStr2 = (inpStr) => {
  let str2 = "";
  for (let i = inpStr.length - 1; i >= 0; i--) {
    str2 += inpStr[i];
  }
  console.log(str2);
};

reverseStr2("Jassi");

/////////////////////////////////////////////////////////

const reverseStr3 = (inpStr3) => {
  console.log(inpStr3.split("").reverse().join(""));
};

reverseStr3("Kunj");

// =================================

const isPalidrome = (iStr) => {
  for (let i = 0; i <= iStr.length - 1 / 2; i++) {
    if (iStr[i] !== iStr[iStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalidrome("madam"));
