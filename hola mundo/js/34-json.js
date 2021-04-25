'use strict'

//trabajando con json - javascript object notation
//nos deja hacer una especie de array asociativo


/*
objeto json se define de esta manera como una variable y con llaves y 
le indicamos las propiedades que va a tener y las vamos separando mediantes una coma como en los array
y podemos acceder a las pripiedades tendriamos que  poner peliculas.propiedad elegina poner 
un punto nos deja acceder a la propiedad del objeto.
*/
var pelicula ={
	titulo:'batman vs superman',
	year: 2017,
	pais:'Estados Unidos',
}

var peliculas =[
	{titulo:'la verdad duele',year:'2016',pais:'francia'},
	pelicula
];

//de esta manera podemos cambiarle el valor a las propiedades del objeto
pelicula.titulo='superman gay';


var caja_peliculas=document.querySelector('#peliculas');

var index;
for(index in peliculas){
	var p=document.createElement('p');
	p.append(peliculas[index].year +' _ '+peliculas[index].titulo);
	caja_peliculas.append(p);
	
}


