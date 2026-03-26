const btnSemestral = document.getElementById("btnSemestral");
const btnAnual = document.getElementById("btnAnual");
const btnMensal = document.getElementById("btnMensal");

btnSemestral.addEventListener("click", irSemestral);
btnAnual.addEventListener("click", irAnual);
btnMensal.addEventListener("click", irMensal);

function irSemestral(){
    window.location.href = "pages/semestral.html";
}

function irAnual(){
    window.location.href = "pages/anual.html";
}

function irMensal(){
    window.location.href = "pages/mensal.html";
}