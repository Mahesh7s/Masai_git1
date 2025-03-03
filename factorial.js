function fact(n){
    if(n==1){
        return 1;
    }
    if(typeof n!=="number"|| n<0 || isNaN(n)){
        return "Invalid Number"
    }else if(n==0){
        return `The factorial of ${n} is 1 `;
    }
    else{
        return n*fact(n-1)
    }
}
console.log(fact(5))
console.log(fact(-7))
console.log(fact(0))
console.log(fact("0"))
console.log(fact("MMM"))
console.log(fact(10))
