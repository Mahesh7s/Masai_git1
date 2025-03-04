function outer(){
    let message="Hello"
    return function inner(){
        console.log(message)
    }
}
let msg=outer()
msg()