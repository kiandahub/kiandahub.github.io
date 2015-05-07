(function(document){
    
    // Sets
    var slideContainer = document.querySelector(".slide"),
        c = slideContainer.children,
        l = c.length - 1;

    // Elemento visível
    function on(){
        c[position].style.opacity = '1'
    }

    // Elemento oculto
    function off(){
        c[position].style.opacity = '0';
    }

    var transicao = function(){
        if(position == l){
            off();
            position = 0;
            on();
        }else{
            off();
            position++;
            on();
        }
    };

    position = 0;
    on();

    // Tempo até a próxima transição
    setInterval(transicao, 5000);

}(document))