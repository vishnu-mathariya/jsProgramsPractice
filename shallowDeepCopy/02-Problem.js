const obj1 = {
  name: "Vishnu",
  address: {
    city: "Pune",
  },
};

const deepCopyObj = structuredClone(obj1);

deepCopyObj.address.city = "Mumbai";

console.log(obj1);

console.log(deepCopyObj);
