const countWordsInSentence = (inpSent) => {
  let numOfWords = 0;

  for (let i = 0; i < inpSent.length; i++) {
    numOfWords = inpSent.split(" ");
  }
  return numOfWords.length;
};

console.log(countWordsInSentence("Hi vishnu mathariya"));
console.log(countWordsInSentence("How can I break a sentence into words ?"));


///////////////////////////////////




const countWords = (inpSent) =>{

    let numOfWords = 0


    for(let i=2; i < inpSent.length; i++){

        numOfWords = inpSent.split(" ")

    }

    return numOfWords.length
}

console.log(countWords("I am vishnu mathariya"));
