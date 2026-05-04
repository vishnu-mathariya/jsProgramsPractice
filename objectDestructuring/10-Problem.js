const obj = {
  name: "Vishnu",
  skills: ["JS", "React", "Redux"],
};

const {
  name,
  skills: [firstSkills],
} = obj;

console.log(name, firstSkills);
