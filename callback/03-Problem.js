function processArray(arr, callback) {

    for(let i=0; i< arr.length; i++){
        console.log(callback(arr[i]));
        
    }
}

function doubleValues(item) {
    return item*2
  
}




processArray([1,2,3], doubleValues);
