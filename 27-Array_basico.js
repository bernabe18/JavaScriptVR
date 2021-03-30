"uses strict"

//arrays (arreglos) ,matrices 
//Array Basico

var nombre= "Victor Robles"

//collecion de datos
var nombres= ["Victor Robles" , "juan lopez" ,"jose marteinez" ,"manoloa martin"  ,52,true];

var lenguajes = new Array ("PHP","JS" ,"GO","JAVA" ,"python")
/*
console.log(nombres [3]);// como sacar un dato segun su indice poniendo llamando a el array y poniendo el indice enttre llave 

//toma el dato por prompt y sabes que indice queresmo sacar  del array
var elemento = parseInt(prompt("que elemento del array quieres",0));
if (elemento>=nombre.length){
	alert("introduce el numero correcto menor que "+nombres.length);
}else{
	alert("El usuario seleccionado"nombres[elemento]);
}
*/

// recorrer un Array con un bucle y  mostrando todo los elementos .

document.write("<h1>lenguages de programacion del 2018</h1> ");
document.write("<ul>");

//RECORRER ARRAY CON FOR ,FOREACH

/*
for(var i =0 ; i < leguajes.length ; i++){
	document.write("<li>"+ lenguaje[i]+"</li>");
}
*/

//el forEach se utiliza para los array para recorrelos de una manera optima 
//que tiene un callback que va a recibir varios paramentros que 
/*nos van a indicar el ELEMENTO , SU INDICE , Y EL ARRAY COMPLETO.

lenguajes.forEach((elemento,indice ,arr)=>{
	document.write(arr);
	document.write("<li>"+indice+" - "+elemento+"</li>");
});
*/
// sabado 27/03/2021

//De esta manera podemos recorrer un array de una forma mas optima utilizando el for in que
//incializamos el bucle con la variable que le damos el valor del array haci cuando llamemos al array y le pasemos como 
//indice la variable que inicia el bucle nos devolvera todo el array y si pasamos un posicion nos devuelve un valor 
//pero con todas las iteraciones del array.

for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

//Varias maneras de Busquedas 

/*
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
});

console.log(busqueda);

*/
//nos indica el indice del elemento que estamos buscando
var busqueda = lenguajes.findIndex( lenguaje => lenguaje == "PHP");

var busqueda = lenguajes.find( lenguaje => lenguaje == "PHP");

var precios = [10 ,20 ,50 ,80 , 12];

// Nos devuelve un dato booleano comfirmando si la condicion se cumple 
var busqueda = precios.some( precios => precios > 11 );


console.log(busqueda);