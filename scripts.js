let Library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const book = new Book(title,author,pages);
    Library.push(book);
}

const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');
myButton.addEventListener('click', (e)=>{
    addToLibrary();
    document.querySelector('form').reset();
    let inputText = `${Library[Library.length-1].title} by ${Library[Library.length-1].author}, ${Library[Library.length-1].pages} pages`;
    if(inputText != '')
    {
        e.preventDefault();
        const myLi = document.createElement('li');
        myLi.innerHTML = inputText;
        list.appendChild(myLi);
        
        const status = document.createElement('span');
        status.innerHTML = 'unread';
        status.setAttribute('class','status');
        myLi.appendChild(status);

        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x';
        mySpan.setAttribute('class','remove');
        myLi.appendChild(mySpan);

    }
    const close = [...document.querySelectorAll('span.remove')];
    close.forEach(button => {
        button.addEventListener('click', ()=>{
            button.parentElement.style.display = 'none';
        });
    });

    const status = [...document.querySelectorAll('span.status')];
    console.log(status);
    status.forEach(button => {
        button.addEventListener('click', ()=>{            
            if(button.textContent === 'unread')
            {
                button.style.backgroundColor = 'green';
                button.textContent = 'read';                 
            }
            else{
                button.style.backgroundColor = '#3A8C7D';
                button.textContent = 'unread';   
            }
        });       
    });   

});
