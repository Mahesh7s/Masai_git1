let arr=[

    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 } ]
    
    
    let arr1=arr.filter((ele)=>ele.stock<100).map((ele)=>
    {
        return{
            name:ele.name,
            category:ele.category,
            totalReorderCost:ele.pricePerUnit*(100-ele.stock)
        }
    }).reduce((acc,curr)=>{
        //console.log(curr.totalReorderCost)
        if(!acc[curr.category]){
            acc[curr.category]=0;
        }
        acc[curr.category]+=curr.totalReorderCost
        return acc
    },{})
    
    let new1=Object.entries(arr1).sort((a,b)=>b[1]-a[1])
    new1=Object.fromEntries(new1)
        
    
    console.log("Descending :",new1)
    //console.log(arr1)