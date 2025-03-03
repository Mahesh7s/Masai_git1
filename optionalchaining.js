const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };
const user1 = { id: 123, profile: { name: "John Doe" } };


function printl(user){
    
    let id=user?.id??"Invalid-Id";
    let name=user?.profile?.name??"Information not available";
    let city=user?.profile?.address?.city??"Information not available"
    let zipcode=user?.profile?.address?.zipcode??"Information not available";
    
    return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`

}
console.log(printl(user1))
console.log(printl(user))