function orderFood (foodName, callback) {
    console.log(`Preparing ${foodName}...`);

    setTimeout(() => {
        callback(`${foodName} is ready!`)
    },3000)
    

}

function gettingReady (message){
    console.log(`Order Status: ${message}`);
    

}

orderFood("Pizza", gettingReady)