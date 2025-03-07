function outer(){
    let message="HI WELCOME";
    return function inner(){
        console.log(message)
    }
}

let message=outer()
message()