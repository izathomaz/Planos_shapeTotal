const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");

btnVoltar.addEventListener("click", voltar);
btnAvancar.addEventListener("click", avancar);

function voltar(){
    window.location.href = "pages/semestral.html";
}

function avancar(){
    window.location.href = "pages/anual.html";
}