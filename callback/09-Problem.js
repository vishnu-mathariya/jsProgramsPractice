const checkAge = (age, callback) => {
  console.log("Checking age...");
  callback();
};

checkAge(20, (age) => {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
  
});
