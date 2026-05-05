const createMultiplier = (x) => {
  const innerFun = (y) => {
    return x * y;
  };

  return innerFun;
};

const multiply = createMultiplier(2);

console.log(multiply(2));
console.log(multiply(5));
