const calSimpleInterest = (PA, IR, time) => {

    let simpleInterest = (PA * IR * time)/100

    console.log(simpleInterest);
    

}

calSimpleInterest(20000, 10, 5.5 )

////////////////////////////////////



const calcSimpleInterest = (PA, IR, time) =>{

    if(PA <= 0 || IR <= 0 || time <= 0){
        return"Invalid input"
    }

    return (PA * IR * time)/100
}

console.log(calcSimpleInterest(10000000, 100, 500));
