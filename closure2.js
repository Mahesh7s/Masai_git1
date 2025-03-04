function createBankAccount(amount){
    let balance=amount;
    return{
        deposit(amount){
            balance+=amount;
            return balance;
        },
        withdraw(amount){
            if(amount<balance){
                balance-=amount;
                return balance;
            }else{
                return "Low balance"
            }
        },
        getbalance(){
            return balance;
        }
    }
}
let user1=createBankAccount(10000)
console.log(user1.getbalance())
console.log(user1.deposit(1000))
console.log(user1.withdraw(9000))
console.log(user1.getbalance())