function taskmanager(){
    let tasks=[]
    return{
        add(tsk,sts="pending"){
             tasks.push({title:tsk,status:sts})
             return tasks
        }
    }
}


let person1=taskmanager();
//console.log(person1.add("Homework"))
let arr1=person1.add("Assignment","Completed");
arr1=person1.add("Journaling");
arr1=person1.add("Washing","completed");
arr1=person1.add("homework");
arr1=person1.add("Gardening");
console.log(arr1)
arr1.map((ele)=>ele.status="completed")
arr1=person1.add("Cooking");
arr1=person1.add("emailing");
console.log(arr1)
console.log("Completed tasks......")
let comple=arr1.filter((ele)=>ele.status==="completed").sort((a,b)=>a.title.localeCompare(b.title)).forEach(ele=>console.log(ele))
console.log("Pending tasks...........")
let pend=arr1.filter((ele)=>ele.status==="pending").sort((a,b)=>a.title.localeCompare(b.title)).forEach(ele=>console.log(ele))
let count=arr1.reduce((acc,{status})=>{
    acc[status]=(acc[status]||0)+1;
    return acc
},{})
console.log(count)