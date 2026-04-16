
// let arr =[1,2,2,3,4,4]
// let arr2=[]
// const removeDuplicates = () =>{
//     for(let i=0; i < arr.length; i++){
//         if(!arr2.includes(arr[i])){

//             arr2.push(arr[i])
//         }



//     }
//     return arr2;



// }

// console.log(removeDuplicates());




const removeDuplicate = (inpArr) =>{
    let arr2 = []
    for(let i=0; i < inpArr.length; i++){

        if(!arr2.includes(inpArr[i])){
            arr2.push(inpArr[i])
        }
    }
    return arr2;
}

console.log(removeDuplicate([1,2,3,4,3,5,6,5,6,3,3,2,1]));
