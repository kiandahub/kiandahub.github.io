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
var registar = document.querySelector(".registar");

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
	var formulario = document.querySelector(".mainForm");

	// Oculta o formulário básico
	formBasico.style.display = "none";

	// Condições para mostrar um form conforme o interesse escolhido
	if(nomeDoForm == "Startup"){
		startup.style.display = "block";
		formulario.action = "https://docs.google.com/forms/d/1-YF-k7JCMVbzhcdnQpyLQOc_Zl3E3iwsQRWtUidAV5E/formResponse";
	}

	if(nomeDoForm == "Investir em startups"){
		investidor.style.display = "block";
		formulario.action = "https://docs.google.com/forms/d/1omqrWQ1piLGjRH4TI2cE_rxgd15OBvVfeU6KCaKex4Y/formResponse";
	}

	if(nomeDoForm == "Ser um mentor"){
		mentor.style.display = "block";
		formulario.action = "https://docs.google.com/forms/d/1Heps7QBHBRWwEHhp5PZiiZRA3scmIfuWrie_YyLLaIk/formResponse";
	}

	// Disable o botão
	proximo.disabled = true;

	// Enable o botão registar
	registar.disabled = false;

	console.log(formulario.action);

	// Submit
	registar.addEventListener("click", function(){
		formulario.submit();
	}, false)

}

// Escolha de algum item na lista de interesse
proximo.addEventListener("click", function(){

	newForm(select_interesse.value);

}, false);

/*var setInputNames = function(role_prefix){
	// Input elements
	var nome = document.querySelector(".i_nome").name = role_prefix.nome;
	var email = document.querySelector(".i_email").name = role_prefix.;
	var telefone = document.querySelector(".i_telefone").name = role_prefix.;
	var pais = document.querySelector(".i_pais").name = role_prefix.;
	var morada = document.querySelector(".i_morada").name = role_prefix.;
	var data_de_nascimento = document.querySelector(".i_data_de_nascimento").name = role_prefix.;
	var nivel_academico = document.querySelector(".i_nivel_academico").name = role_prefix.;
	var interessado_em = document.querySelector(".i_interessado_em").name = role_prefix.;

	// Startups
	var nome_da_startup = document.querySelector(".i_nome_da_startup").name = role_prefix.;
	var url = document.querySelector(".i_").name = role_prefix.;
	var email_da_startup = document.querySelector(".i_email_da_startup").name = role_prefix.;
	var sobre_a_startup = document.querySelector(".i_sobre_a_startup").name = role_prefix.;

	// Investidores
	var empresa = document.querySelector(".i_empresa").name = role_prefix.;
	var cargo = document.querySelector(".i_cargo").name = role_prefix.;
	var ja_investiu = document.querySelector(".i_ja_investiu").name = role_prefix.;
	var projectos_investidos = document.querySelector(".i_projectos_investidos").name = role_prefix.;

	// Mentores
	var empresa_mentor = document.querySelector(".i_empresa_mentor").name = role_prefix.;
	var cargo_mentor = document.querySelector(".i_cargo_mentor").name = role_prefix.;
	var ja_foi_mentor = document.querySelector(".i_ja_foi_mentor").name = role_prefix.;
	var fale_experiencia = document.querySelector(".i_fale_sobre").name = role_prefix.;


}*/