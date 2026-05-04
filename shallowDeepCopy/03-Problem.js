const obj = {
  name: "Vishnu",
  skills: ["JS", "React"],
};

const shallowCopy = { ...obj };

shallowCopy.skills.push("Redux");

console.log(obj);

console.log(shallowCopy);
