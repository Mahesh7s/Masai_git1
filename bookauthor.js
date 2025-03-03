const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book){
    
    if (!book.title || !book.author || !book.year||typeof book.title!=="string" ||typeof book.author!=="string" || typeof book.year!=="number") {
    
    console.log("Book information is incomplete.");
    
    return;
    
    }
    else if(this.findBookByTitle(book.title)){
        console.log("Book is already exists");
        return;
    }
    else{
       this.books.push(book);
       console.log(`Book "${book.title}" added successfully.`)
     
    }
    
    },
    
    findBookByTitle(title) {
    
    res= this.books.find(book => book.title === title);
    //console.log(`${res} is found`)
    return res;
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    let rem=this.books.splice(index, 1);
    console.log(`"${rem[0].title}" is removed`);
    
    
    } else {
    
    console.log("Book not found.");
    
    } } };
    
    library.addBook({ title:"90",author: "George Orwell", year: 1949 });
    library.addBook({ title:"90",author: "George Orwell", year: 1949 });
    library.removeBook("90");
    library.addBook({ title:90,author: "George Orwell", year: 1949 });
    
    console.log("Total books available:",library.books.length);