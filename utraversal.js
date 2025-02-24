function utraversal(array1){
    let n=array1.length;
    let bag=""
    for(let i=n-1;i>=0;i--){
        bag+=array1[i][0]+" "
    }
    for(let j=1;j<n;j++){
        bag+=array1[0][j]+" "
    }
    for(let i=1;i<n;i++){
        bag+=array1[i][n-1]+" "
    }
    for(let j=n-2;j>=1;j--){
        bag+=array1[n-1][j]+" "
    }
    console.log(bag)
}
let array1=[[1,2,3],[4,5,6],[7,8,9]]
utraversal(array1)