
function Book (name,author,pages,isRead){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const myLibrary = [];

function addBookToLibrary () {
    const bookName = document.getElementById("bookName").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = Number.parseInt(document.getElementById("pages").value);
    const isRead = document.getElementById("read").checked;
    const book = new Book(bookName,bookAuthor,bookPages,isRead);
    myLibrary.push(book);
}


function showBooks () {
    // crear otra branch solo para trabajar esta parte
    let container = document.getElementsByClassName('container')[0];
    myLibrary.forEach(function (value,index) {
        let card = document.createElement('div');
        let deleteIconContainer = document.createElement('div');

        let iconHolder = document.createElement('div');
        iconHolder.classList.add('iconHolder');

        deleteIconContainer.classList.add('deleteIconContainer');
        deleteIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg>`;
        deleteIconContainer.addEventListener('click', function () {
            container.removeChild(card);
        });
        // deleteIconContainer
        /* add classes to icon containers and append them to card */
        let readIconContainer = document.createElement('div');
        readIconContainer.classList.add('readIconContainer');
        if (value.isRead) {
            readIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill=\"green\" /></svg>`;
        }else{
            readIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>`;
        }
        readIconContainer.addEventListener('click', function () {
            if (value.isRead) {
                value.isRead = false;
                readIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>`;
            }else{
                value.isRead = true;
                readIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill=\"green\" /></svg>`;
            }
        });

        iconHolder.appendChild(deleteIconContainer);
        iconHolder.appendChild(readIconContainer);

        card.classList.add("card");
        card.innerHTML = `${value.name}<br>By ${value.author} is ${value.pages} long`;
        card.appendChild(iconHolder);
        container.appendChild(card);
        
        let hijos = Array.from(card.childNodes);
        console.log(hijos);
        //crear un div
        //darle los estilos
        //agregar el contenido del libro
    })
}

let plusButton = document.getElementById("addBook");
let sidebar = document.getElementsByClassName("sidebar")[0];
let addButton = document.getElementById("addForm");




plusButton.addEventListener('click', function () {
    (sidebar.classList[1] === 'dematerialize-animation') ? sidebar.classList.remove('dematerialize-animation') : null;
    console.log(sidebar.classList);
    sidebar.style['left'] = (sidebar.style.left !== '0px') ? "0px" : "0px";
    sidebar.classList.toggle('materialize-animation');
});

addButton.addEventListener('click', function () {
    addBookToLibrary();
    (sidebar.classList[1] === 'materialize-animation') ? sidebar.classList.remove('materialize-animation') : null;
    // sidebar.classList.toggle('materialize-animation');
    sidebar.classList.toggle('dematerialize-animation');
    sidebar.style['left'] = (sidebar.style['left'] === '0px') ? "100%":"0px";
    showBooks();
});

/* 
access token: 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
 */

