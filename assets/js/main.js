// Elementos do DOM
var BODY = document.getElementsByTagName("body"),
	header = document.querySelector(".mainHeader");

window.addEventListener("scroll", function() {
	console.log(window.scrollY);
}, false);

/* Formulário de inscrição */

// DOM
var fecharBT = document.querySelector(".fechar"),
	inscrever_me = document.querySelector(".inscricao"),
	lightbox = document.querySelector(".form_fazerparte");

// Abre o lightbox / formulário
inscrever_me.addEventListener("click", function(){
	lightbox.style.display = "flex";
}, false);

// Fecha o lightbox / formulário
fecharBT.addEventListener("click", function(){
	lightbox.style.display = "none";
}, false);