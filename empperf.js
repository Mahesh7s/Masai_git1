let arr=[

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    
    ]
    
    let arr1=arr.filter((ele)=>ele.tasksCompleted>5).map((ele)=>{
        return {name:ele.name,
        performance: ele.rating>4.5?"Excellent":(ele.rating>3 && ele.rating<=4.5)?"Good": "Needs_Improvement"}
    }
    ).sort((a,b)=>{
        let priority={Excellent:1,Good:2,Needs_Improvement:3}
        return priority[a.performance]-priority[b.performance]
        
    })
    
    
    console.log(arr1)