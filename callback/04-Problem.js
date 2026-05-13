const processUser = (name, callback) =>{
   console.log(`welcome ${name}`);

   callback()
   

   
}

const loginSuccess = () =>{
    console.log("Login successfull");
}

processUser("Vishnu", loginSuccess)