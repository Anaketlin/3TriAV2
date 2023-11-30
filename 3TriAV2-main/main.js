function tocaSom(idElementoAudio){
   document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador + 1;
    console.log(contador);

    listaDeTeclas.onkeydown = function(evento){
        if(evento.code === 'Space'|| evento.code === 'Enter'){
            listaDeTeclas.classList.add('ativa')
        }
     }
    listaDeTeclas.onkeydown = function(){ 
        listaDeTeclas.classList.remove('ativa')
   }
}
