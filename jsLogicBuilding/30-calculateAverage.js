const calculateAve = (inpArr) => {
  let avg = 0;
  let sum = 0;

  for (let i = 0; i < inpArr.length; i++) {
    sum += inpArr[i];
  }

  avg = sum / inpArr.length;
  return avg;
};

console.log(calculateAve([1, 2, 7, 14]));
console.log(calculateAve([1, 2, 4]));


//////////////////////////////////




const calcAvg = (inpArr) =>{
    let sum =0 ;
    let avg =0 ;

    for(let i=0; i<inpArr.length; i++){

        sum += inpArr[i]
    }
    avg = sum /inpArr.length

    return avg
}



console.log(calcAvg([1,2,4,8]));
