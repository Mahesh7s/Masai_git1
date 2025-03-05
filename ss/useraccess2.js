function getAccess(user){
    return user.role==="admin"?user.active===true?user.experience>5
    ?user.department==="IT"?"Full IT Admin Access":"Full General Admin Access":"Limited Admin Access":"Admin Access Revoked":user.role==="manager"?user.active===true?user.experience>3?user.department==="Sales"?"Full Sales Manager Access":"Full Manager Access":"Limited Manager Access":"Manager Access Revoked":user.role==="user"?user.active===true?user.department==="Support"?"Priority Support Access":"User Access":"User Access Revoked":"Invalid Role"
}
let person = { role: "admin", experience: 7, active: true, department: "IT" };
console.log(getAccess(person))
let person1 = { role: "manager", experience: 4, active: true, department: "Marketing" };
console.log(getAccess(person1))
let person2 = { role: "user", experience: 2, active: true, department: "Support" };
console.log(getAccess(person2))
let person3 = { role: "admin", experience: 3, active: false, department: "Finance" };
console.log(getAccess(person3))