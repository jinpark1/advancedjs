function double(x) {
    if(!Number.isInteger(x)){
        throw new Error(`${x} is not an integer!`)
    }
    return x * 2;
}

const result = double(5)

console.log('-------- result', result);