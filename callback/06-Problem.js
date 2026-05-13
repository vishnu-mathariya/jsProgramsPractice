function message(username, callback){
    console.log(`User: ${username}`);

    callback()
    

}

function showStatus(){
    console.log("Status: Active");
    
}

message("jassi", showStatus)