const checkout = {

    items: [],
    
    total: 0,
    
    addItem(item) {
    let price = parseFloat(item.price);
    
    if (isNaN(price)) {
    
    console.log("Invalid price.");
    
    return;
    
    }
    
    this.items.push(item);
    
    this.total +=price;
    
    },
    
    getTotal() {
    
    let tTotal=parseFloat(this.total).toFixed(2);
    return `Total: $${tTotal}`
        
    } };
    
    
    
    checkout.addItem({ name: "Milk", price: 3.50 });
    checkout.addItem({ name: "Coffee Maker", price: 100 });
    checkout.addItem({ name: "Coffee Maker", price: "456" });
    console.log(checkout.items)
    
    console.log(checkout.getTotal());