"use sttrict"
//ambito de las variables 


function holaMuando(texto){
	var hola_mundo="texto dentro de funcion"

	console.log(texto);
	console.log(numero);
	console.log(hola_mundo);
}
//variables fuera de una funcion puende ser llamadas dentro de una funcion
var numero=12;
var texto="hola mundo soy una variable global";
holaMundo(texto);

//esta funcion no se es global porque esta dentro de una funcion
console.log(hola_mundo);

//convertir un un dato en un string con (	tostring()	)