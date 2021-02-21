"use strict"
//pruba con var 
/*var permite permite crear una variable global y local
 en una funcion sin importar el ambito del bloque*/

 var numero=40;
 console.log(numero);
 //el valor de la salida por consola va ser 40
if (true){
	var numero=50;
	console.log(numero);
//el valor de la salida por consola va ser 50
}