const calculator = (a, b, callback) =>{
    callback(a,b)

}

function add (a,b){
   console.log( a + b);
   

}

// console.log(add(10,5));

calculator(10,5,add)