const message = (prefix) => {
  const inner = (name) => {
    return `${prefix} ${name}`;
  };
  return inner;
};

const result = message("mr");

console.log(result("Vishnu"));
