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


var todoslosDiv = document.getElementsByTagName('div');

var seccion =document.querySelector('#miseccion');
var hr =document.createElement("hr");

//haciendo esto podemos conseguir elementos por etiquetas.
var valor;
for(valor in todoslosDiv){
	if(typeof todoslosDiv[valor].textcontent == 'string'){
		var parrafo =document.createElement('p');
		var texto = documnet.createTextNode(todoslosDiv[valor].textcontent);
		parrafo.append(texto);
		texto.append(parrafo);
	}
}
seccion.append(hr);

//conseguir  elementos por clase css

var divRojos=document.getElementsByClassName('rojo');
var divAmarrilos=document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background="yellow"

divRojos.style.background ="red";

var div ;
for (div in divRojos){
	if(divRojos[div].cassName == 'roj'){
		divRojos[div].style.background ='red';
	}
}

//query selector solo nos va agarrar un solo elemento haci sea una etiqueta o una clase o un id 

var id = document.querySelector('#Encabezado');

//nos devuelve un array de todos los elementos node que tenga dicha clases o etiquetas de html 
var calseRojo =document.querySelectorAll("div[cass='rojo']");

var etiqueta =document.querySelector("div");
