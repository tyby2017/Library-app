let myLibrary = [];
const emptyLib = document.getElementById('lib').innerHTML;

function Book(title,author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const book = new Book();
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = parseInt(document.getElementById('pages').value);
    myLibrary.push(book);
}

function loopMyLibrary() { 
    myLibrary.forEach(book => {
        const div = document.createElement('div');
        div.setAttribute('class','book-div');
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '-';
        deleteButton.setAttribute('class', 'remove-btn');
        div.innerHTML = `${book.title} by ${book.author}, ${book.pages} pages`;        
        div.appendChild(deleteButton);
        document.getElementById('lib').appendChild(div);
    });
}

function makeFormVisible() {
    const form = document.getElementById('form');
    const submit = document.getElementById('submit');
        form.style.visibility = 'visible';
        submit.style.visibility = 'visible';
}

function makeFormInvisible() {
    const form = document.getElementById('form');
    const submit = document.getElementById('submit');
        form.style.visibility = 'hidden';
        submit.style.visibility = 'hidden';
}

function resetForm() {
    const inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach(input => {
        input.setAttribute.value = '';     
    }); 
}

function emptyLibrary() {
    document.getElementById('lib').innerHTML = emptyLib;
}

//  front-end part
const button = document.getElementById('add-book');
button.addEventListener('click', makeFormVisible);

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    addBookToLibrary();
    emptyLibrary();    
    loopMyLibrary();
    makeFormInvisible();
    document.getElementById('form').reset();
    removeBtns = [...document.getElementsByClassName('remove-btn')];
    listenRmvButtons();
});

console.log(removeBtns);

function listenRmvButtons() {
    removeBtns.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('id');
            myLibrary.splice(index,1);
        });
    });
}




