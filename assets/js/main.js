// Elementos do DOM
var BODY = document.getElementsByTagName("body"),
	header = document.querySelector(".mainHeader");

window.addEventListener("scroll", function() {
	//console.log(window.scrollY);
}, false);

/* Lightbox */

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

/* Form */

// DOM
var select_interesse = document.querySelector(".interessado"),
	proximo = document.querySelector(".proximo");

select_interesse.addEventListener("change", function(){
	
	// Enable o button
	proximo.disabled = false;

}, false);


proximo.addEventListener("click", function(){

	newForm(select_interesse.value);

}, false);

var newForm = function(nomeDoForm){
	// DOM
	var startup = document.querySelector(".startup"),
		investidor = document.querySelector(".investidor"),
		mentor = document.querySelector(".mentor"),
		formBasico = document.querySelector(".formBasico");

	// Oculta o formulário básico
	formBasico.style.display = "none";

	// Mostra o form escolhido
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

console.log(proximo.disabled);