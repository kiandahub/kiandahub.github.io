// Elemento visível
function on(){
    c[position].style.opacity = '1'
}

// Elemento oculto
function off(){
    c[position].style.opacity = '0';
}

var slideContainer = document.querySelector(".slide");
var c = slideContainer.children;
var l = c.length - 1;

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