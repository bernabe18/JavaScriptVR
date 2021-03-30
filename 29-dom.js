'use strict'

//DOM - Document Object Model

function cambiaColor(color){
	caja.style.background=color;
}



//var caja =document.getElementById("micaja");

var caja =document.querySelector('#micaja');

caja.innerHTML= "!TEXTO EN LA CAJA DESDE JS¡";
cambiaColor()
caja.style.padding="5px";
caja.style.color="white";

console.log(caja);