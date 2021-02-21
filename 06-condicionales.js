"use strict"
//condicionales
/*Nos permite comparar algo;
ejemplo si A es igual a B haz algo la condicion
 del igual se puede cambiar por un distinto o mayor, menor que.*/
 /*son intrucciones que nos permite comparar o hacer una condicion concreta
 y si sucede esa condicion que el codigo ejecute algo*/


/* var edad1=30;
   var edad2=12;

si pasa esto
if (edad1>edad2){
	//ejecuta esto
console.log(edad una es mayor que edad 2);
}
else{
	consolo.log(edad dos es inferior);
}
/*
//operadolores relacionales
mayor:>
menor:<
mayor o igual:>=
menor o igual:<=
igual:==
distinto:!=
*/
var edad=74;
var nombre="leandro"

if(edad>=18){
	//es mayor de edad
	console.log(nombre+"tiene"+edad+"años,es mayor de  edad");
		if(edad==33){
			console.log("todavia eres un millenial");
			{
			else if (edad>=70){
					console.log("Eres un anciano");
				}
			else{
					console.log("ya no eres un milenial");
				}
			else{
			//es menor de edad
			console.log(nombre+"tiene"+edad+"anos,es menor de edad");
				}
			}
		}
/*operadores logicos
	AND(Y):&&
	OR(O):||
	negacion:!
*/
var year=2018;
//negacion
if(year!=2016){
	console.log("el año no es 2016 realmente es:"+year);
}

//AND
if(year>=2000&&year<=2020&&year!=2018){
	console.log("estamos en añi actual");
}else{
	console.log("estamos en la era post moderna");
}

//OR
if(yaer==2008||year==2018&&year==2028)
{
	console.log("El año acaba en 8");
}else{
	console.log("AÑO NO REGISTRADO");
}