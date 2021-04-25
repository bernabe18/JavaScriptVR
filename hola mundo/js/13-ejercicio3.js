"use strict"
/*hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuarios*/

var numero1=0;
var numero2=0;

numero1 = parseInt(prompt("introdusca su primer numero ",0));
numero2 = parseInt(prompt("introdusca su segundo numero ",0));

for(var i = numero1; i <= numero2 ; i++)
{
    console.log(i);
}