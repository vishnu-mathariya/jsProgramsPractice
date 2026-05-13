function uploadFile(fileName, callback) {
  console.log(`Uploading ${fileName}...`);

  setTimeout(() => {
    callback(`${fileName} uploaded successfully`);
  }, 2000);
}

const uploaded = (message) => {
  console.log(message);
};

uploadFile("resume.pdf", uploaded);
