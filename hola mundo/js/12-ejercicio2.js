/*Utiliza un bucle , mostrar la suma y la media de los numeros introducidos
 hasta introducir un numero negativo y ahi mostrar el resultado*/
 "use strict"
 var numero=0;
 var suma=0;//acumalador
 var contador=0;//variable para contar
 
 numero=parseint(prompt("introdusca un numeros hasta que un introdusca uno negativo" ,0));//esta funcion solo es para pedir numero
//isNaN es una funcion booleana que lo pasado por el parametro es un numero
 if(isNaN(numero)){//esta funcion boleana que nos permite saber si lo ingresado por paramatro se trata de un entero en el caso que no sea un numeo entero nos va decir que es un false y si se trata de un numero entero va decir true
 	numero=0;
 }else if(numero >= 0){
 	suma=suma+numero// incrementador de numero
 				//suma+=numero//incrementador de nunmero esto se llama en lenguaje un acomulador
 	contador++;
 }console.log(suma);//muestra la suma que se va incrementando
 console.log(contador);//muestra la cantadidad de veces que se fueron acomulando numero

 alert("la suma de todo los numeros es :" + suma);
 alert("la media de todos los numeros ingresados es :" +(suma/contador));