var Valid = function(elementos){
	
	elementos = "." + elementos;

	// Propriedades
	var _elementos = document.querySelectorAll(elementos);

	var size = _elementos.length,
		finalReturn = true;

	for(var i = 0; i < size; i++){

		if(_elementos[i].value != null){
			// Se algume elemento tiver valor vazio
			if(_elementos[i].value == ""){

				// Muda a cor do background
				_elementos[i].style.backgroundColor = "#4a0708";
				
				// Retorna falso
				finalReturn = false;
			}
		}
	}

	// Valor retornado pela função
	return finalReturn;

};