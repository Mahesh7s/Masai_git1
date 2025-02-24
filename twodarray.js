function printarray(arr){
    for(let i=0;i<N;i++){
        let bag=""
        for(let j=0;j<M;j++){
        bag+=arr[i][j]+" "
        }
        console.log(bag)
    }
}

let arr=[[1,2],[3,4],[5,6]];
let N=3,M=2;
printarray(arr);