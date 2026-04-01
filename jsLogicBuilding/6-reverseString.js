let str = "VISHNU";
let str2 = "";

const reverseString = () => {
    for (let i =str.length-1; i>= 0;i--){
        str2 += str[i];
    }
    return str2;
}

console.log(reverseString());

// ======================================================
// different way 

// let str = "VISHNU";
// let str2 = "";

// const reverseString = () => {
//     console.log(str.split("").reverse().join(""));
// }

// reverseString()
