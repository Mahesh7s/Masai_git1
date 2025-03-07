let arr=[

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    
    ]
    
    let new1=arr.filter((emp)=>emp.tasksCompleted>5).map((emp)=>{
       if(emp.rating>4.5){
           return ({name:emp.name,performanceLevel:"Excellent"});
       }else if(emp.rating>3 && emp.rating<=4.5){
           return({name:emp.name,performanceLevel:"Good"});
       }else{
           return({name:emp.name,performanceLevel:"NeedsImprovement"});
       }
        
    }).sort((a,b)=>{
        let imp={Excellent:1,Good:2,NeedsImprovement:3};
        return imp[a.performanceLevel]-imp[b.performanceLevel]
    })
    
    console.log(new1)