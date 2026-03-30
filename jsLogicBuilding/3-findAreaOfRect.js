// const  areaOfRect = (l, w) => {

//     if (l >=1 && w >=1){
//    const  rect  = l * w
//     console.log(rect)

//     }
//     else 
//         console.log("Value is invalid ") 
        
    
// }

// areaOfRect(-300,240)


// ================================================



// const areaOfRect = (l, w) => {
//     if(l >= 1 && w >= 1){
//         return l * w;
//     }else{
//         return "Value is invalid";
//     }
// }

// console.log(areaOfRect(2,-4));


// ===============================================



// function areaOfRect (l,w) {
//     if(l<=1){
//     throw new Error("l should be positive")
// }
// if(w<=1){
//     throw new Error("w should be positive")
// }
// const rect = l*w;
// console.log(rect);

// }

// areaOfRect(36,68)



// By using range error 


function areaOfRect (l,w) {
    if(l<=1){
    throw new RangeError("l should be positive")
}
if(w<=1){
    throw new RangeError("w should be positive")
}
const rect = l*w;
console.log(rect);

}

areaOfRect(9,68)