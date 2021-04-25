"use strict"
//transformacion de textos
var numero=444;
var texto1 ="Bienvenidos al curso de JavaScript de Victor Robles";
var texto2="es muy bueno "

//METODOS

//busca la primer concidencia
var busqueda=texto1.indexOf("curso");

//la ultima concidencia
var busqueda=texto1.lastIndexOf("curso");

//busca todas las concidencias 
var busqueda=texto1.search("curso");

//devuelve todo en un array donde se encuentra la palabra y el resto
//y si quisiera encontrar varias concidencias de la misma palabra tengo que poner entre (/text/g )
var busqueda=texto1.match("curso");

//para eliminar un trozo de texto de un punto(primer parametro) hasta donde quiera(segundo parametro) tengo que utilizar el SUBSTR
var busqueda=texto1.substr(14 ,5);

//para quitar una letra puntual de algun string esta el charAt con decirle
// en que ubicacion (numerica )se encuentra
var busqueda=texto1.charAt();
//busca al inicio del string y nos devuelve una dato booleano
//si lo encuenta sera true y si no sera false
var busqueda=texto1.startsWith("Bienvenidos");//true
//con wndsWith() nos dice si termina con ese string.S
var busqueda=texto1.endsWith("Victor Robles");//true
//con includes() lo que hace es buscar una palabra nos devuelve dato booleanos
var busqueda=texto1.includes("JavaScript");
//para remplazar un texto por otro utilizaremos el remplace(primer parametro, segundo parametro)
//el primer parametro es que sera remplasado por el segundom paramentro.
var busqueda=texto1.remplace("JavaScript ","cualquier cosa");
//para cortar un string debemos utilizar  slice() pasandole el numero de caracter
//y solo desde ese caracter hacia adelante es lo que va quedar del string el parametro para atras se borrara.
//tambien si le pasamos otro parametro se cortara de ese caracter para delante
var busqueda=texto1.slice(14 ,22);
//split se utiliza para poder recoger todo un string y lo guarda en un arrays
//y lo corte con cualquier caracter que le pongamos en el parametro.
var busqueda=texto1.split(" ");
//lo que hace el trim() quita los espacios de el inicio y el final de string
var busqueda=texto1.trim("Bienvenidos");

console.log(busqueda);