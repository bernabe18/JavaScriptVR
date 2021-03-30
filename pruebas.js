"use strict"

/*
1. pide 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero(todos sus elementos)en el cuerpo de la pagina y la consola
3. Ordenar y mostrar 
4. Invertir sus orden Mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducida por el usuario , que nos diga si lo encuentra y su indice 
(se valorará el uso de funciones)

*/
//PRIMER EJEMPLO

/* var numeros = new Array(6); lr indico la cantidad de posiciones que quiero que tenga el array

for(var i=0 ; i< 6 ; i++){
	numeros[i] =parseInt(prompt("introduce un numero ",0));
}
consola.log(numeros);
*/
//SEGUNDO EJEMPLO
function mostrarArray(elementos,textoCustom=""){

	document.write("<h1> contenido de array "+textoCustom+"</h1>");
	document.write("<ul>");

	//funcion de callback
	elementos.forEach((elementos,index)=>{
	document.write("<li> "+elementos+"</li>");
	});
	document.write("</ul>");
}


var numeros =[];

for (var i = 0 ; i <= 5 ; i++){
	numeros.push(parseInt(prompt("introduce un numero ",0)));
}

mostrarArray(numeros);

numeros.sort(function(a ,b){return a-b});

console.log(numeros, "ordenado");
mostrarArray(numeros, "ordenado");

numeros.reverse();
mostrarArray(numeros ,"invertido");

document.write("<h1>El array tiene  "+ numeros.length +"Elementos");


var  busquedad =parseInt(prompt("busca un elemnto" ,0));

var posicion = numeros.findIndex(numero => numero == busquedad);

if(posicion && posicion != -1){

document.write("<h1>ENCONTRADO</h1>");
document.write("<h1> Posicion de la busqueda: "+posicion+" </h1>");

}else{
	document.write("<h1>NO ENCONTRADO</h1>");
}