//let boton = document.getElementById("btn");
//let titulo = document.getElementsByClassName("title")

//console.log(boton);
//console.log(titulo);


//for (let i = 0; i < titulo.length; i++) {
//    console.log(titulo[i].innerText);
//}

let boton = document.querySelector('#btn');
let titulo = document.querySelector('.title');
let titulos = document.querySelectorAll('.title');
let mainTitle = document.querySelectorAll('.box-title .title')

console.log(boton);
console.log(titulo);
console.log(titulos);
console.log(mainTitle);

for (let i = 0; i < titulo.length; i++) {
    console.log(titulo[i].innerText);
}

let buttonsContainer = document.getElementById('buttons');

boton.addEventListener("click", function() {
    let containerTitle = document.createElement("h3");
    containerTitle.innerHTML = 'Me agregaron desde Js'
    buttonsContainer.appendChild(containerTitle);
});