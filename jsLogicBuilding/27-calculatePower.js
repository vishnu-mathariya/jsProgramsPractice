const calculatePower = (n1,n2) =>{

    let result = 1

    for(let i=0; i < n2; i++){
        result = result *n1
    }
    return result;

}


console.log(calculatePower(5,4));



// 2,3----> 2*2*2 ==> 8