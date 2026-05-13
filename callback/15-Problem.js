const checkResult = (marks, callback) => {
  console.log(`Checking result...`);

  setTimeout(() => {
    if (marks >= 35) {
      callback("Passed");
    } else callback("Failed");
  }, 2000);
};

const receiveResult = (result) => {
  console.log(`Result : ${result} `);
};

checkResult(70, receiveResult);
checkResult(7, receiveResult);
