/*
	KiandaHUB: Landing Page
*/

// Elementos do DOM
var header = document.querySelector(".mainHeader");

/* ---- Lightbox ---- */

// DOM
var fecharBT = document.querySelector(".fechar"),
	inscreverMe = document.querySelector(".inscricao"),
	lightbox = document.querySelector(".form_fazerparte"),
	newsletterBox = document.querySelector(".newsletter"),
	newsletterBt = document.querySelector(".newsletter_bt"),
	subscribeBt = document.querySelector(".subscribe"),
	emailSubscribe = document.querySelector(".news_email"),
	newsletterForm = document.querySelector(".newsletterForm"),
	errorMsg = document.querySelector(".erro"),
	closeBt = document.querySelector(".closeBt");

// Pattern to validate e-mail from http://www.sitepoint.com/javascript-validate-email-address-regex/
var regExp = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;

// Show the lightbox
newsletterBt.addEventListener("click", function(){
	
	newsletterBox.style.display = "flex";
	newsletterBox.style.display = "-webkit-box";

}, false);

// Hide the lightbox
closeBt.addEventListener("click", function(){
	
	newsletterBox.style.display = "none";
	errorMsg.style.display = "none";
	emailSubscribe.value = "";

}, false)

subscribeBt.addEventListener("click", function(){
	
	/*console.log(emailSubscribe.value);
	console.log(regExp.test(emailSubscribe.value));*/

	if(emailSubscribe.value == "" || !regExp.test(emailSubscribe.value)){

		// Show error message
		errorMsg.style.display = "block";

		return false;

	}else{

		// Send to Mailchimp
		newsletterForm.submit();

		// Turn off the lightbox
		newsletterBox.style.display = "none";
		errorMsg.style.display = "none";
		emailSubscribe.value = "";

		return true;

	}

}, false);


// Abre o lightbox / formulário
inscreverMe.addEventListener("click", function(){

	lightbox.style.display = "flex";
	lightbox.style.display = "-webkit-box";

}, false);

// Fecha o lightbox / formulário
fecharBT.addEventListener("click", function(){

	lightbox.style.display = "none";

}, false);

/* ---- Form ---- */

// Elementos DOM
var select_interesse = document.querySelector(".interessado");
	proximo = document.querySelector(".proximo"),
	registar = document.querySelector(".registar");

// Campos origatórios.
var nome = document.querySelector(".i_nome"),
	email = document.querySelector(".i_email"),
	pais = document.querySelector(".i_pais");

// Enable o botão próximo quando selecionado um item da lista
select_interesse.addEventListener("change", function(){
	
	// Enable o button
	proximo.disabled = false;

}, false);

// Novos campos conforme a escolha do utilizador
var newForm = function(nomeDoForm){

	// DOM
	var startup = document.querySelector(".startup"),
		investidor = document.querySelector(".investidor"),
		mentor = document.querySelector(".mentor"),
		formBasico = document.querySelector(".formBasico"),
		formulario = document.querySelector(".mainForm");

	// Oculta o formulário básico
	formBasico.style.display = "none";

	switch(nomeDoForm){

		case "Startup":
			startup.style.display = "block";
			formulario.action = "https://docs.google.com/forms/d/1-YF-k7JCMVbzhcdnQpyLQOc_Zl3E3iwsQRWtUidAV5E/formResponse";
			break;

		case "Investir em startups":
			investidor.style.display = "block";
			formulario.action = "https://docs.google.com/forms/d/1omqrWQ1piLGjRH4TI2cE_rxgd15OBvVfeU6KCaKex4Y/formResponse";
			break;

		case "Ser um mentor":
			mentor.style.display = "block";
			formulario.action = "https://docs.google.com/forms/d/1Heps7QBHBRWwEHhp5PZiiZRA3scmIfuWrie_YyLLaIk/formResponse";
			break;

	}

	// Disable o botão
	proximo.disabled = true;

	// Enable o botão registar
	registar.disabled = false;

	// Submit
	registar.addEventListener("click", function(){

		switch(nomeDoForm){

			case "Startup":
				if(Valid("req_startup") != false){
					formulario.submit();
				}
				break;

			case "Investir em startups":
				if(Valid("req_investidor") != false){
					formulario.submit();
				}
				break;

			case "Ser um mentor":
				if(Valid("req_mentor") != false){
					formulario.submit();
				}
				break;

		}

	}, false);

}

// Escolha de algum item na lista de interesse
proximo.addEventListener("click", function(){

	if(Valid("required") != false){

		// Invoca a função para selecionar o novo formulário.
		newForm(select_interesse.value);

	}
	
}, false);
