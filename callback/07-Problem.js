const operation = (num1, num2, callback) => {
  return callback(num1, num2);
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log(operation(4, 5, multiply));
