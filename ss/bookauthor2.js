const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
    
    if (!book.title || !book.author || !book.year|| typeof book.title !=="string"||typeof book.author!=="string"||typeof book.year!=="number") {
    
    console.log("Book information is incomplete.");
    
    return;
    
    }
    else if (this.findBookByTitle(book.title)){
        console.log(`${book.title} is Already added`)
        return;
    }else{
    this.books.push(book);
    console.log(`${book.title} is added`)
    }
    },
    
    findBookByTitle(title) {
    
    return this.books.find(book => book.title === title);
    
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    this.books.splice(index, 1);
    console.log(`${book.title} is removed`)
    
    } else {
    
    console.log("Book not found.");
    
    } } };
    
    library.addBook({ author: "George Orwell", title:"PII",year: 1949 });
    library.addBook({ author: "George Orwell", year: 1949 ,title:""});
    library.addBook({ author: "George Orwell", title:"PII",year: 1949 });
    
    
    console.log("Total books:",library.books.length);
    console.log(library.findBookByTitle("The Hobbit"))