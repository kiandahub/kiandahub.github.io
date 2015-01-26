/*
	KiandaHUB: Landing Page
*/

// Elementos do DOM
var BODY = document.getElementsByTagName("body"),
	header = document.querySelector(".mainHeader");

window.addEventListener("scroll", function() {
	//console.log(window.scrollY);
}, false);

/* ---- Lightbox ---- */

// DOM
var fecharBT = document.querySelector(".fechar");
var	inscrever_me = document.querySelector(".inscricao");
var	lightbox = document.querySelector(".form_fazerparte");

// Abre o lightbox / formulário
inscrever_me.addEventListener("click", function(){
	lightbox.style.display = "flex";
}, false);

// Fecha o lightbox / formulário
fecharBT.addEventListener("click", function(){
	lightbox.style.display = "none";
}, false);

/* ---- Form ---- */

// Elementos DOM
var select_interesse = document.querySelector(".interessado");
var proximo = document.querySelector(".proximo");

// Enable o botão próximo quando selecionado um item da lista
select_interesse.addEventListener("change", function(){
	
	// Enable o button
	proximo.disabled = false;

}, false);

// Novos campos conforme a escolha do utilizador
var newForm = function(nomeDoForm){

	// DOM
	var startup = document.querySelector(".startup");
	var	investidor = document.querySelector(".investidor");
	var	mentor = document.querySelector(".mentor");
	var	formBasico = document.querySelector(".formBasico");

	// Oculta o formulário básico
	formBasico.style.display = "none";

	// Condições para mostrar um form conforme o interesse escolhido
	if(nomeDoForm == "startup"){
		startup.style.display = "block";
	}

	if(nomeDoForm == "investidor"){
		investidor.style.display = "block";
	}

	if(nomeDoForm == "mentor"){
		mentor.style.display = "block";
	}

	// Disable o botão
	proximo.disabled = true;

}

// Escolha de algum item na lista de interesse
proximo.addEventListener("click", function(){

	newForm(select_interesse.value);

}, false);
