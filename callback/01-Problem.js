const greetUser = (name)=>{
    console.log(`Hello ${name}`);
    console.log("Welcome Message");
    
    

}

const user = (callback) =>{
   callback("Vishnu")
    

}

user(greetUser)