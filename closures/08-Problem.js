function createLogger(type) {
  return function inner(msg) {
    return `${type} : ${msg}`;
  };
}

const result = createLogger("ERROR");

console.log(result("Something brokes"));
