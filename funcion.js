
const contenedor = document.getElementsByClassName("contenedor-fondo")[0];
const txt = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");

function cambiarTemaC(){
    contenedor.style.background = "white"
    for (i=0;i<txt.length;i++){
        txt[i].style.color = 'black';
        h1[i].style.color = 'black';
    }
}

function cambiarTemaO(){
    contenedor.style.background = "black"
    for (i=0;i<txt.length;i++){
        txt[i].style.color = 'white';
        h1[i].style.color = 'white';
    }
}