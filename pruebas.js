"use strict"
/*
var usuario=0;
var divisores=0;

usuario=parseint(prompt("introduce un numero " , 0));

for(var usuario=i; i < divisores /2; i++);{
    if(usuario===0){
        console.log("estos son todos los divisores " + i);
    }
}
*/
/*
Realizar el algoritmo que permita ingreso la marca del producto ,el peso
el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenmiento(entre -30 y 30)hasta que el usuario quiera
e informar al terminar el ingreso por document.write();

a)la cantidad de temperaturas pares.
b)la marca del producto mas pesado.
c)la cantidad de producto de productos que se conservan a menos de 0 grados.
d)el promedio del peso del peso de todos los productos 
f)el peso maximo y el minimo.
*/
 /*
 	al presionar el boton pedir numero hasta que el usuario quiera
 	mostrar maximo y el numero minimo ingresado
 */
var ingreseNumero
var elMaximo;
var elMinimo;
var respuesta;

respuesta="si"

ingreseNumero=prompt("ingrese los numeros que quieras :");
ingreseNumero=parseInt(ingreseNumero);

while(respuesta=="si")
{
		if(ingreseNumero<elMinimo || ingreseNumero>elMaximo)
		{
			ingreseNumero=prompt("ingrese otro numero");
			ingreseNumero=ingreseNumero+elMaximo;
		}
		else
		{
			if(ingreseNumero>elMinimo)
			{
				ingreseNumero=prompt("ingrese otro numero");
				ingreseNumero= ingreseNumero + elMinimo;
			}
		}
		respuesta=prompt("desea continuar ")
}

console.log(elMinimo);