function createBankacc(amount){
    let balance=amount;
    return{
        deposit(amount){
            balance+=amount;
            return balance;
        },
        withdraw(amount){
            if(amount<=balance){
                balance-=amount;
                return balance;
            }
        },
        getBalance(){
            return balance;
        }
    }
}
let account=createBankacc(1000);
console.log(account.deposit(200));
console.log(account.deposit(2070));
console.log(account.withdraw(3000));
console.log(account.getBalance());