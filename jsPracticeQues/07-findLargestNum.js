// const findLargestNum = (n1, n2, n3)=>{
//     if(n1 >= n2 && n1 >= n3)
//         return `${n1} is largest num`
//     else if(n2 >= n1 && n2 >= n3)
//         return `${n2} is largest num`
//     return `${n3} is largest num`
// }

// console.log(findLargestNum(10,3,5))


// find largest num of given array 

// let arr = [10, 45, 2, 99, 23];

// one way

// let arr = [10, 45, 2, 99, 23];

// let largest = Math.max(...arr)
// console.log(largest);

// ------------------------------

let arr = [10, 45, 2, 99, 23];
let largest=arr[0];
for (let i=1; i < arr.length; i++){
    if(arr[i] > largest){
        largest =arr[i];
    }

}
console.log(largest);
