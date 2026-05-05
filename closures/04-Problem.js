const greeting = (name) => {
  return function (msg) {
    return `Hello ${name}, ${msg}`;
  };
};

const greet = greeting("Vishnu")
console.log(greet("Good morning"));
console.log(greet("How are you "));

