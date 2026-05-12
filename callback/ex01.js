function greet(name){
    // console.log("Hello " + name);
    console.log(`Hello ${name}`);
    
    
}

function processUser(callback){
    callback("Vishnu")
}

processUser(greet)