const downloadFile = (fileName, callback) =>{
    console.log(`Downloading ${fileName}...`);

    setTimeout(() =>{
        callback(`${fileName} downloaded successfully`);
        
    },2000)
    

}

const downloaded = (message) =>{
    console.log(message);
    
    
}

downloadFile("movie.mp4", downloaded)