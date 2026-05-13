const fetchData = (callback) => {
  console.log("Fetching data");

  setTimeout(() => {
    callback("User data loaded ");
  }, 3000);
};

const loadingFunc = (data) => {
  console.log(data);
};

fetchData(loadingFunc);
