const student = {
  name: "Vishnu",
  address: { city: "Pune" },
  skills: ["JS", "React"],
  getName: function () {
    return this.name;
  },
};

const deepCopy = JSON.parse(JSON.stringify(student));

console.log(deepCopy);
console.log(student);
console.log(deepCopy.getName);
