# KiandaHUB - Landing page

O KiandaHub é um espaço de colaboração entre os novos talentos da tecnologia angolana (startups).

## Contribuir

Tendo o NodeJS instalado na sua máquina, abra o terminal e execute:

	// entre na directória do projecto  
	cd landing_page

	// Instale as dependências
	sudo npm i -g gulp && sudo npm i

	// Execute o task runner com o comando
	gulp

## Organização dos ficheiros / directórias

	assets
		|_/css
		|_/fonts
		|_/img
		|_/js
	src
		|_/_seccoes			
				|_facaparte.jade
				|_footer.jade
				|_form.jade
				|_home.jade
				|_mapa.jade
		|_/stylus
				|_main.styl
		|_index.jade
	|_index.html
	|_.gitignore
	|_gulpfile.js
	|_package.json

A directoria src/ contem o código fonte em .jade (HTML) e .styl (CSS).

##TO-DO

~~Enviar os dados do form no Google Drive Spreadsheets~~

~~Adicionar o rodapé.~~

~~Optimização para os mobiles (responsive design).~~

~~Estilizar melhor o input[type="date"]~~

~~Validar os campos do formulário.~~
Responder os emails após o cadastro com a API do MailChimp.

Modularizar o ficheiro main.styl (estilos css).