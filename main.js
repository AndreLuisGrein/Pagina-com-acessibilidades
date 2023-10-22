const altera_cor = document.querySelector('#altera_cor');
const cor_titulo = document.querySelector('#titulo');
let i = true;
function alterarcor(){
    if (i == true){
        altera_cor.style.color = "white";
        altera_cor.style.backgroundColor = "black";
        cor_titulo.style.color = "yellow";
        i = false;
    }
else {
        altera_cor.style.color = "black";
        altera_cor.style.backgroundColor = "white";
        cor_titulo.style.color = "black";
        i = true;
    }
}

