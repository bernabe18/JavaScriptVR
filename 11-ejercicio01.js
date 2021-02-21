"use strict"
/*programa que pida dos numeros y nos diga cual es el mayor,el menor y si son iguales*/
var numero1=parseint(prompt("introduce el primer numero entero",0));
var numero2=parseint(prompt("introduce el segundo numero entero",0));

if(numero1==numero2)
{
console.log("son iguales");
}
else if(numero1>numero2)
{
console.log("el numero mayor es:"+numero1);
console.log("el numero menor es:"+numero2);
}
else if(numero2>numero1)
{
console.log("el numero mayor es:"+numero2);
console.log("el numero menor es:"+numero1);
}
else
{
console.log("los datos ingresados no son validos");
}
