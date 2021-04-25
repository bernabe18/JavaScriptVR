"use strict"
//transformacion de textos
var numero=444;
var texto1 ="Bienvenidos al curso de Java Script de Victor Robles";
var texto2="es muy bueno "

//convertir un entro a string
var dato=numero.toString();
	//pasar un texto a mayucusla con toLowerCase();
	dato=texto1.toUpperCase();
	//pasando un texto  a minuscula.
	dato=texto2.toLowerCase();



//calcular la longitud de un texto o la cantidad de  elementos. 
 var nombre ="Victor Robles"

console.log(nombre.length);

//concatenar - unir texto

var textototal=texto1+texto2

//diferente manera de concatenar
var textototal=texto1.concat(""+texto2)

console.log(textototal)