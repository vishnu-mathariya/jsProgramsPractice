const generateMultiplicationTable = (num, tillNum) => {
  if (typeof num !== "number" || typeof tillNum !== "number" || num < 0) {
    console.log("Invalid input num");
    return;
  }

  if (tillNum <= 0) {
    console.log("Invalid input num");
    return;
  }

  for (let i = 1; i <= tillNum; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

generateMultiplicationTable(1, 10);
