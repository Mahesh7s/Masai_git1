console.log("Try programiz.pro");

let arr=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function processProducts(arr){
    let arr1=arr.map((ele)=>ele.name)
    //console.log(arr1)
    arr.forEach((ele)=>{
        if(ele.price>50){
            console.log( `${ele.name} is above $50`);
        }else{
            console.log(`${ele.name} is below $50`) 
        }
    })
}
processProducts(arr)