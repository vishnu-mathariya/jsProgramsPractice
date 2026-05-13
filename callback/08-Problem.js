 function greetUser(name, callback){
     console.log(`Hello ${name}`);

     callback()
    
 }

 greetUser("Vishnu" , function(){
    console.log("Welcome to JS");
    
 })