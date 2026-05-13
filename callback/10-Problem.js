const startTask = (callback) => {
  console.log("Task Started");
  setTimeout(() => {
    callback();
  }, 2000);
};

const completeTask = () => {
  console.log("Task completed");
};

startTask(completeTask);
