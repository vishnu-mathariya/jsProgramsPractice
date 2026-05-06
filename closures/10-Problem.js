const repeatMsg = (msg) =>{
    const innerFn = (time) =>{
        return msg.repeat(time)

    }
    return innerFn

}

const result = repeatMsg("Hi ")



console.log(result(3));
