"use strict"

//array multidimencional son arrays dentro de otros arrays 
//

var categorias =["accion " ,"terror ","comedia"];

var peliculas = ["la verdad duele ","la vida es bella ", "gran torino"];

//nos ordena el array alfabeticamente
peliculas.sort();

//Para que el array empieze al reves que el ultimo sea el primero
peliculas.reverse(); 

//dentros de los array podemos poner cualquier tipo de dato y tambien podemos poner otros arrays 

//arrays multidimencional
var cine = [categorias ,peliculas ];

//mostrar el array y pasarle el indice de el el array que queremos acceder y el degundo indice sera para elegir ele elemento.
console.log(cine[0][1]);

//Agregando un elemnto nuevo a aun array y agregado por prompt

var elemnto =" " ;

do
{
	elemento=prompt("introduce tu pelicula");
	peliculas.push(elemento);

}
while(elemento != "ACABAR");
//elemina el ultimo elemento agregado
peliculas.pop();

//elegimos un elemento y le cambiamos el valor de dato 
peliculas[0]=undefined;

//pelicula.push("Batman");
console.log(peliculas);




// Eliminar un elemento en concreto de un arrays lo primero que debemos buscar es el indice donde se encuentra utilizando el metodo  indexOf();
//una ves que encontramos el indice tenemos que condicionar con un if y preguntar si indice el mayor  a -1 y utilizar el metodo
//slice(indice , 1); que nos permite eleminar segun el indice del elemento del array.


var indice =peliculas.indexOf('gran torino');

if(indice > -1){
	peliculas.slice(indice, 1);
}

//convertir un array en string 

var peliculas_string =peliculas.join();

var cadena = "texto1 ,texto2 ,texto3";
var cadena_array = cadena.split(", ");

console.log(peliculas);
