const obj = {
    name : "Vishnu",
    address : {

    }
}

const F1 = ({name, address : {city = "Delhi"}}) =>{

    console.log(name, city);
    

}

F1(obj)