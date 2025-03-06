function createHeavyDataHandler() {

    let largeData = new Array(1000000).fill(0); // Large data array
    
    return {
    
    processData() {
    
    console.log("Processing data of size:", largeData.length);},
    
    clearData() {
    
    console.log("Clearing data");
    
    return this.largeData = null; } }; }
    
    let handler = createHeavyDataHandler();
    
    handler.processData(); 
    handler.clearData(); 
    handler.processData(); 
    //console.log(handler.largeData)
    
    handler=""

    console.log(handler)
    