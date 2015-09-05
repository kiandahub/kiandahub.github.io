var Valid = function(elementos){
	
	var elementos = "." + elementos;

	// Propriedades
	var _elementos = document.querySelectorAll(elementos);

	var size = _elementos.length,
		finalReturn = true;

	for(var i = 0; i < size; i++){

		if(_elementos[i].value != null){

			//console.log(finalReturn);
			// Se algume elemento tiver valor vazio
			if(_elementos[i].value == ""){

				// Muda a cor do background
				_elementos[i].style.backgroundColor = "#333";				

				// Retorna falso
				finalReturn = false;
			}else{
				finalReturn = true;
			}
		}else{
			finalReturn = true;
		}
	}

	// Valor retornado pela função
	return finalReturn;

};