const userProfile = {

    name: "Alice",
    
    age: 28,
    
    details() {
    
    return `"${this.name} is ${this.age} years old."`; },
    
    updateAge(newAge) {
    
    if (newAge <= 0) {
    
    console.log("Invalid age.");
    
    return; }
    
    this.age = newAge;
    
    this.details(); } };
    //console.log(userProfile.details());
    
    userProfile.updateAge(30);
    
    console.log(userProfile.details());