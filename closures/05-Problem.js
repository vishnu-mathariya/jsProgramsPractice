const add = (x) => {
  return function inner(y) {
    return x + y;
  };
};

const addition = add(4);

console.log(addition(2));
