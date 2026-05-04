// Shallow Copy

const obj1 = {
    name : "Vishnu",
    address : {
        city : "Pune"
    }
}

const shallowObj = {...obj1}

shallowObj.address.city = "Mumbai"

console.log(obj1);
console.log(shallowObj);

////////////////////

// Deep Copy

const obj2 = {
  name: "Vishnu",
  address: {
    city: "Pune",
  },
};
const deepobj = structuredClone(obj2);

deepobj.address.city = "Mumbai";
deepobj.name = "Jassi";

console.log(obj2);
console.log(deepobj);
