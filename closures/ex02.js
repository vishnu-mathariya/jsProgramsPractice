const  outer = () =>{
    let x = 10

    const inner = () =>{
        console.log(x);
        
    }

    return inner

}

const fn = outer()
fn()
