const isPrimeNum = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrimeNum(7));
console.log(isPrimeNum(11));
console.log(isPrimeNum(12));
console.log(isPrimeNum(14));
console.log(isPrimeNum(23));
