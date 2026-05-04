const obj = {
    user : {
        name : "Vishnu" ,
        address : {
            city :"Pune"
        }
    },
    skills : ["JS", "React"]
}

const shallowCopy = {...obj}

shallowCopy.user.address.city = "Mumbai"
shallowCopy.skills.push("Redux")

console.log(obj);
console.log(shallowCopy);

