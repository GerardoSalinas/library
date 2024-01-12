const myLibrary = [];

function addBookToLibrary () {

}

function showBooks () {
    myLibrary.forEach(function (value,index) {
        let card = document.createElement('div');
        
        //crear un div
        //darle los estilos
        //agregar el contenido del libro
    })
}

let addButton = document.getElementById("addBook");
let sidebar = document.getElementsByClassName("sidebar")[0];

addButton.addEventListener('click', function () {
    console.log(sidebar);
    sidebar.style['left'] = (sidebar.style.left !== '0px') ? "0px" : "0px";
    sidebar.classList.toggle('materialize-animation');
})


