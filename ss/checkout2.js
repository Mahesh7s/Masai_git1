const checkout = {

    items: [],
    
    total: 0,
    
    addItem(item) {
      item.price=+item.price
    
    if (typeof item.price !== 'number' || isNaN(item.price) || item.price <= 0) {
    
    console.log("Invalid price.");
    
    return;
    }
    else{
    this.items.push(item);
    
    this.total += item.price;
    }
    },
    
    getTotal() {
    
    return `Total Price: $${parseFloat(this.total).toFixed(2)}`; } };
    
    checkout.addItem({ name: "Coffee Maker", price: "99.95" });
    
    checkout.addItem({ name: "Milk", price: 3.50 });
    checkout.addItem({ name: "Milk", price: " " });
    console.log("Total iems:",checkout.items.length)
    //console.log(checkout.items)
    
    console.log(checkout.getTotal());