let Library = [];
const emptyLibraryDiv = document.getElementById('library-div').innerHTML;
let removeButtonsArray = [];

//ADD
const addButton = document.getElementById('add-book');
addButton.addEventListener('click', makeFormVisible);

function makeFormVisible() {
    const submit = document.getElementById('submit');
    const bookForm = document.getElementById('add-book-form');
    if((submit.style.visibility = 'hidden') && (bookForm.style.visibility = 'hidden')) {
        submit.style.visibility = 'visible';
        bookForm.style.visibility  ='visible';
    }
}

function makeFormInvisible() {
    const submit = document.getElementById('submit');
    const bookForm = document.getElementById('add-book-form');
    if((submit.style.visibility = 'visible') && (bookForm.style.visibility = 'visible')) {
        submit.style.visibility = 'hidden';
        bookForm.style.visibility  ='hidden';
    } 
}

//SUBMIT
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    makeFormInvisible();
    resetLibraryDiv();
    addBooks();
    document.getElementById('add-book-form').reset();
    addBooksToDiv();
    


});

//BOOK CONSTRUCTOR
function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//ADD BOOKS to LIBRARY ARRAY
function addBooks() {
    let book = new Book();
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('pages').value;
    Library.push(book);
    }

//ADD BOOKS to DIV
function addBooksToDiv() {
    let counter = 0;    
    Library.forEach(book => {        
        const container = document.createElement('div');
        container.setAttribute('class','container');
        const libraryDiv = document.getElementById('library-div');
        libraryDiv.appendChild(container);
        //create div for book
        const div = document.createElement('div');
        div.innerHTML = `${book.title} by ${book.author}, ${book.pages} pages`;
        div.setAttribute('class','book-div');
        container.appendChild(div);
        //create button for remove
        const button = document.createElement('button');
        button.innerHTML = '-';        
        button.setAttribute('id', `${counter}`);
        button.setAttribute('class','removeButton');        
        container.appendChild(button);
        counter++;
    });    
}

function resetLibraryDiv() {
    document.getElementById('library-div').innerHTML = emptyLibraryDiv;
}

//EVENT LISTENER FOR REMOVE BUTTONS
