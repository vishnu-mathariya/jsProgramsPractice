const countVowelsAndConsonants = (inpStr) => {
  let vowels = "aeiou";

  let vov = 0;

  let conso = 0;

  for (let i = 0; i < inpStr.length; i++) {
    let char = inpStr[i].toLowerCase();

    if (char >= "a" && char <= "z") {
      if (vowels.includes(char)) {
        vov++;
      } else {
        conso++;
      }
    }
  }

  return ` Vowels : ${vov} , Consonents: ${conso}`;
};

console.log(countVowelsAndConsonants("Vishnu"));
console.log(countVowelsAndConsonants("bharat"));
console.log(countVowelsAndConsonants("jassi 1223"));


////////////////////////////////////////////





const countVowelsAndConsonants1 = (inpStr) => {
  let vowels = "aeiou";

  let vov = 0;

  let conso = 0;

  for (let i = 0; i < inpStr.length; i++) {
    let char = inpStr[i].toLowerCase();

    if (/[a-z]/.test(char)) {
      if (vowels.includes(char)) {
        vov++;
      } else {
        conso++;
      }
    }
  }

  return ` Vowels : ${vov} , Consonents: ${conso}`;
};

console.log(countVowelsAndConsonants("Vishnu"));
console.log(countVowelsAndConsonants("bharat"));
console.log(countVowelsAndConsonants("jassi 1223"));
