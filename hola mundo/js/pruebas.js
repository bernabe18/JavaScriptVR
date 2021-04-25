"use strict"

/*
debemos  realizar la carga de prevencion de contagio de cada uno debo obtener los siguentes datos:
el tipo de producto(validar "barbijo" ,"jabon" o "alcohol "), el precio(validar entre 100 y 3000)
la cantidad de unidades(no puede ser 0 o negativo y no debe superar las 1000 unidades), la Marca y el fabricante.
se debe informar al usuario lo siguiente:

a)Del mas barato de los alcoholes ,la cantidad de unidades y el fabricante 
b)Del tipo con mas unidades el promedio por compra
c) cuantas unidades de jabon hay en total.

*/

var cantidadAlcoholBarato;
var fabricanteBarato;
var precioAcoholMasBarato;

var cargaDeProducto;
var tipoProducto;
var precioDelProducto;
var cantidadUnidades;
var marcaDelProducto;
var fabricanteDelProducto;


var promedioDeCompra;
var banderaPrimero;


var acumuladorjabon;
var acumuladorAlcohol;
var acumuladorBarbijo;

var contadorjabon;
var contadorAlcohol;
var contadorBarbijo;


acumuladorjabon=0;
acumuladorBarbijo=0;
acumuladorAlcohol=0;
contadorjabon=0;
contadorAlcohol=0;
contadorBarbijo=0;
cargaDeProducto=0;

alert('funciona');
while(cargaDeProducto <= 2){
	
	cargaDeProducto++;
	
	tipoProducto=prompt('ingrese un producto jabon ,alcohol ,barbijo ');
	while(tipoProducto != 'jabon' && tipoProducto != 'alcohol' && tipoProducto != 'barbijo'){
	tipoProducto=prompt('Error ingrese uno de los productos mencionados ');

	}

	precioDelProducto=parseInt(prompt('Ingrese el precio del producto '));
	while(precioDelProducto < 100 || precioDelProducto >300 || isNaN(precioDelProducto)){
	
	precioDelProducto=parseInt(prompt('Error Ingrese el precio del producto '));
	}


	cantidadUnidades=parseInt(prompt('ingrese la cantidad de unidades '));
	while(cantidadUnidades < 1 || cantidadUnidades >1001 || isNaN(cantidadUnidades)){
	
	cantidadUnidades=parseInt(prompt('Error ingrese la cantidad es unidades '));
	}
	
	marcaDelProducto=prompt('ingrese la marca del producto');
	fabricanteDelProducto=prompt(' ingrese el el fabricante del producto');
	
	switch(tipoProducto){

		case 'alcohol':
		acumuladorAlcohol+=cantidadUnidades;
		contadorAlcohol++;
		if(banderaPrimero == 0 || precioAcoholMasBarato >precioDelProducto){
			precioAcoholMasBarato=precio;
			cantidadAlcoholBarato=cantidadUnidades;
			fabricanteBarato=fabricanteDelProducto;
			banderaPrimero=1;

		}

		break;
		
		case 'jabon':
		acumuladorjabon+=cantidadUnidades;
		contadorjabon++;
		break;
		
		case 'barbijo':
		acumuladorBarbijo+=cantidadUnidades;
		contadorBarbijo++;
		break;
	}

	


	cargaDeProducto++;

	console.log('el tipo del producto es :'+tipoProducto);
	console.log('el precio del producto es :'+precioDelProducto);
	console.log('la cantidad es unidades es :'+cantidadUnidades);
	console.log('la marca del producto es :'+marcaDelProducto);
	console.log('el fabricante es :'+fabricanteDelProducto);
	console.log('******************************');
	console.log('el alcohol mas barato es :'+fabricanteBarato+'__'+'su cantidad es : '+cantidadAlcoholBarato+'___'+precioAcoholMasBarato+'$$$$');
	console.log('******************************');

}

