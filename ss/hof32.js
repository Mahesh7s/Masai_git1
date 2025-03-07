let arr=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

let arr1=arr.reduce((ele,curr)=>{
    ele[curr]=(ele[curr]||0)+1;
    return ele
},{})
arr2=Object.entries(arr1).sort((a,b)=>b[1]-a[1]).map((ele)=>ele[0])
console.log(arr1)
console.log(arr2)