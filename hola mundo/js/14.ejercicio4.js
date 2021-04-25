/* mostrar todos los numeros introducidos por el usuarios y solo mostrar todos los numeros impares*/
 "use strict"

 var usuario1=0;
 var usuario2=0;

 usuario1=prompt("introdusca un  numero ",0);
 usuario2=prompt("introdusca otro numero ",0);

while(usuario1<usuario2)
{
usuario1++
if(usuario1 %2!=0)
    {
console.log(" es impar " + usuario1);
    }
}