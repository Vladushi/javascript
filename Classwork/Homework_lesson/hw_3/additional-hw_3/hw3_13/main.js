let books = [
    {
        title: 'book 1',
        pages: 100,
        authors: ['Maria', 'Igor'],
        genres: ['romance', 'fantasy']
    },
    {
        title: 'book 2',
        pages: 500,
        authors: ['Anna'],
        genres: ['triller', 'horror', 'comedy']
    },
    {
        title: 'book-book 3',
        pages: 250,
        authors: ['Maria', 'Olga', 'Igor'],
        genres: ['romance'],
    }
];
let largestBook = books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].pages > largestBook.pages) {
        largestBook = books[i];
    }
}
console.log('Largest book:', largestBook.title);

let maxGenres = books[0].genres.length;
let maxGenresBook = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length > maxGenres) {
        maxGenres = books[i].genres.length;
    }
}
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length === maxGenres) {
        maxGenresBook.push(books[i].title);
    }
}
console.log('Max genres book:', maxGenresBook);

let maxTitleLength = books[0].title.length;
let longestTitleBook = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > maxTitleLength) {
        maxTitleLength = books[i].title.length;
    }
}
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length === maxTitleLength) {
        longestTitleBook.push(books[i].title);
    }
}
console.log('Longest title book:', longestTitleBook);

let twoAuthorsBook = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2) {
        twoAuthorsBook.push(books[i].title);
    }
}
console.log('Two authors book:', twoAuthorsBook);

let oneAuthorBook = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        oneAuthorBook.push(books[i].title);
    }
}
console.log('One author book:', oneAuthorBook);
