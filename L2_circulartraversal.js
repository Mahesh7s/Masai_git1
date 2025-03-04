let arr=[[1,2,3],[4,5,6],[7,8,9]]
//let arr1=[[1,2,3,10],[4,5,6,11],[7,8,9,12],[13,14,15,16]]
function utraversal(arr){
    let n=arr.length;
    let bag=""
    for(let i=n-1;i>=0;i--){
        bag+=arr[i][0]+" ";
    }
    for(let j=1;j<n;j++){
        bag+=arr[0][j]+" ";
    }
    for(let i=1;i<n;i++){
        bag+=arr[i][n-1]+" ";
    }
    for(let j=n-2;j>=1;j--){
        bag+=arr[n-1][j]+" "
    }
    console.log(bag)
}
utraversal(arr)