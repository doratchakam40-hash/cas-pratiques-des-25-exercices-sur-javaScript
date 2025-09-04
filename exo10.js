const books = [ 
    { title: "elite", pages: 300 },
    { title: "safca", pages: 250 },
    { title: "blue", pages: 350 },
    { title: "orange", pages:310 }
];

const bigBooks = books.filter(book => book.pages > 300);
console.log(bigBooks);