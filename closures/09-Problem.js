function discount(price) {
  return function inner(percentage) {
    const discountAmount = (price * percentage) / 100;
    const finalPrice = price - discountAmount;

    return finalPrice;
  };
}

const product = discount(1000);

console.log(product(10));
console.log(product(20));
