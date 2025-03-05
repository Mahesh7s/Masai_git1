let arr=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function processProducts(arr){
let arr2=arr.map((arr1)=>arr1.name)
arr.forEach((ar)=>{
    //console.log(ar.name,ar.price);
    console.log(ar.price>50?`${ar.name} is above $50`
    :`${ar.name} is below $50`)
});
}
(processProducts(arr))
