"use strics"

/*una funcion es una agrupacion reutilizable de un  conjunto de instrucciones */

function porconsola(numero1 ,numero2)
{
        console.log("suma "+(numero1+numero2));
        console.log("resta "+(numero1-numero2));
        console.log("multiplicacion "+(numero1*numero2));
        console.log("division "+(numero1/numero2));
}
function porpantalla(numero1 ,numero2)
{
        document.write("suma "+(numero1+numero2));
        document.write("resta "+(numero1-numero2));
        document.write("multiplicacion "+(numero1*numero2));
        document.write("division "+(numero1/numero2));
}
function calculadora(numero1 ,numero2 ,mostrar = false)
{
    if(mostrar==false)
    {
      porconsola(numero1 ,numero2);
    }else
    {
       porpantalla(numero1 ,numero2);
    }
    
}
//invocacion de la funcion
calculadora(5,5 ,true);
calculadora(20,10 ,true);
//dependiendo del tercer paramrtro va a cumplir cierta logica

//como utilizar funciones en los bucles
/*for(var i=1; i<=10; i=i+1)
{
    console.log(i);
    calcuradora(i ,8);hace todas las operaciones con el numero 8
}*/