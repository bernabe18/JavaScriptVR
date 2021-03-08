"use strict"

/*
1- pidan 6 numeros por pantalla y lo meta en un array
2- mostrar todo el array entero (todos sus elementos ) en el cuerpo de la pagina y en la consola
3- ordenar y mostrarlos 
4- invertir su orden y mostrarlo
5- mostrar cuantos elementos tiene el array
6- Busqueda de un valor introducido por rl usuario, que nos diga si lo encuentra y su indice
(se valorara el uso de funciones)

*/
alert("una mierdaaaa");


function mostrarArray(elementos,textoCustom=""){

	document.write("<h1> contenido de array "+textoCustom+"</h1>");
	document.write("<ul>");
	//funcion de callback

	elementos.forEach((elementos,index)=>{
	document.write("<li> "+elementos+"</li>");
	});
	document.write("</ul>");
}

//var numeros = new Array(6); opcion 1
//pedir 6 numeros
var numeros=[];

for(var i=0 ; i<=5 ; i++){
	//numeros[i]=parseInt(prompt("introduce un numero " ,0));opcion 1
	numeros.push(parseInt(prompt("introduce un numero " ,0)));
}

//moatrar en el cuerpo de la pagina
mostrarArray(numeros);

//mostrar el array en consola
//orden de forma numerica 
numeros.sort(function(a ,b){return a-b});

console.log(numeros ,"Ordenados");
mostrarArray(numeros ,"Ordenados");

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros ,"revertido");

//contar elementos
document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

//Busqueda
var busqueda = parseInt(prompt("busca un numero ",0));
//
var posicion=numeros.findIndex(numero => numero ==busqueda);

if(posicion && posicion != -1)
{
	document.write("<h1>ENCONTRADO</h1>");
	document.write("<h1>posicion de la busqueda: "+posicion+"</h1>");

}else
{
	document.write("<h1>NO ENCONTRADO</h1>");
}


