const countVowels = (inpStr) =>{
    let count =0
    for(let i=0; i< inpStr.length; i++){
        let char =inpStr[i].toLowerCase();


        if(
            char === "a"||  char === "e" ||  char === "i" ||  char === "o" ||  char === "u"
        ){
            count ++;
        }
    }

    return count;

}

console.log(countVowels("Vishnu"));


// =================================================


const  countVowels2  = (str) =>{
    let count =0
    let vowels ="aeiou";

    for(let i=0; i<str.length; i++ ){
        if(vowels.includes(str[i].toLowerCase())){
            count++
        }
    }
    return count;
}

console.log(countVowels2("bharat"))


// ===============================



const countVowels3 = (str) =>{
    return str
    .toLowerCase()
    .split("")
    .filter((char) => "aeiou".includes(char)).length
}
console.log(countVowels3("jassi"));




// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



const countVowels4 = (inpStr) =>{
    let count =0

    for(let i=0; i< inpStr.length; i++){
        let char = inpStr[i].toLowerCase()


        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){

            count ++ 
        }



    }
    return count;
}


console.log(countVowels4("Kunj"))


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


const countVowels5 = (str) =>{
    let count =0
    let vowels = "aeiou"

    for(let i=0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count ++
        }
    }
    return count;

}


console.log(countVowels5("Vicky"))







