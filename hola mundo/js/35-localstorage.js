'use strict'

/*
LocalStorage podemos guardar imformacion en nuestro navegador web a modo de sesion
y que esta imformacion persista y este disponible durante la navegacion entre las diferentes pasginas
de nuestras paginas qeb o en nuestra aplicacion web

*/

if(typeof(Storage)!== 'undefained'){
	console.log('LocalStorage disponible');
}else{
	console.log("Incompatibile con LocalStorage");
}

//guardar datos
localStorage.setItem("titulo","curso de simfony de victor robles");

// recuperar un elemento 

document.querySelector('#peliculas').innerHTML=localStorage.getItem("titulo");

//guardar un objeto json 

var usuario={
	nombre:'victor',
	email:'victor@victor.com',
	web:'victorroblesweb.es'
};

//como convertir un objeto a JSON string 

localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objeto 
console.log(localStorage.getItem('usuario'));

//convertir un JSON string en un JSON usable por javascript

var userjs=JSON.parse(localStorage.getItem('usuario'));

console.log(userjs);
document.querySelector('#datos').append(userjs.web+ '__'+userjs.nombre);

//borrar datos del local storage
localStorage.removeItem("usuario");


//borrar todo el localStorage
localStorage.clear();

