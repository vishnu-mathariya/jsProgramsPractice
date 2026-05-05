function outer () {
    let name = "Vishnu"

    function inner () {
        console.log(name);
        
    }

    return inner; 

}

const fn = outer();
fn();






