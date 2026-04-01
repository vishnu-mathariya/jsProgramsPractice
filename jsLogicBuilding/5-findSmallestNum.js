const findSmallestNum = (a,b,c)=> {
    if(a <= b && a <= c)
        return `smallest num is  ${a}`
    else if(b <= a && b <= c)
        return `smallest num is ${b}`
    else
        return `smallest num is ${c}`

}

console.log(findSmallestNum(3,0,-1));
console.log(findSmallestNum(-3,-6,-9));
console.log(findSmallestNum(3,3,1));


// ==============================================

// second way 

// function findSmallestNum (a,b,c){
//     let smallestNum = a;
//     if(b <= smallestNum){
//         smallestNum =b;

//     }
//     if(c <= smallestNum){
//         smallestNum =c;
//     }
//     return smallestNum

// }

// console.log(findSmallestNum(100,2,3));

// =======================================================

// third way

// const findSmallestNum = (a,b,c) => {
//     return Math.min (a,b,c)
// }

// console.log(findSmallestNum(10,-900,0));
