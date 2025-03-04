function counter(){
    let count=0;
   return{
       increment(){
           count++
          return count;
       },
       getcount(){
           return count;
       }
 }
};
let arr=counter()
console.log(arr.increment())
console.log(arr.increment())
console.log(arr.increment())
console.log(arr.getcount())
