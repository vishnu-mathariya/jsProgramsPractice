// Use JSON.Parse

const obj = {
  name: "Vishnu",
  address: {
    city: "Pune",
  },
  skills: ["JS", "React"],
};

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.address.city = "Mumbai";
deepCopy.skills.push("Redux");

console.log(obj);
console.log(deepCopy);



//////////////////////////////////

// using  Manula copy

const obj1 = {
  name: "Vishnu",
  address: {
    city: "Pune",
  },
  skills: ["JS", "React"],
};

const deepCopy1 = {
  name: obj1.name,
  address: { ...obj1.address },
  skills: [...obj1.skills],
};

deepCopy1.address.city = "Mumbai";
deepCopy1.skills.push("Redux");

console.log(obj);
console.log(deepCopy);
