function subtract(x) {
  const inner = (y) => {
    return x - y;
  };

  return inner;
}

const sub = subtract(5);

console.log(sub(30));
console.log(sub(0));
console.log(sub(3));
