let arr=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

let arr1=arr.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1;
    return acc
},{})
console.log(arr1);
//console.log(Object.entries(arr1))
console.log(Object.entries(arr1).sort((a,b)=>b[1]-a[1]).map((ele)=>ele[0]))