function printar(array1){
    let bag=""
    for(let i=0;i<array1.length;i++){
        
        if(i%2==0){
            for(let j=array1[i].length-1;j>=0;j--){
                //console.log(array1[i][j]);
                bag+=array1[i][j]+" "
            }
            
        }
            else if(i%2!=0){
                for(let k=0;k<array1[i].length;k++){
                    //console.log(array1[i][k]);
                bag+=array1[i][k]+" "
                    
                }
            }
        
    } console.log(bag)
}

let array1=[[1,2,3,4,5],[6,7,8,9,1],[2,3,4,5,6],[7,8,9,1,2]]
printar(array1);