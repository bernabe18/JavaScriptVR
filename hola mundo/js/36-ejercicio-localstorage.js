'use strict'

var formulario=document.querySelector('#formpeliculas');
formulario.addEventListener('submit',function(){
	var titulo=document.querySelector('#addpeliculas').value;
	
	if(titulo.length >= 1){
	localStorage.setItem(titulo, titulo);
	}
	
});

for(var i in localStorage){
	console.log(localStorage[i]);

	var ul=document.querySelector('#peliculas-list');
	
	if(typeof localStorage[i]=='string'){
		var li=document.createElement('li');
		li.append(localStorage[i]);
		ul.append(li);


	}
}

var formulariob=document.querySelector('#formBorrarPeliculas');

formulariob.addEventListener('submit',function(){

	var titulo=document.querySelector('#borrarPeliculas').value;
	
	if(titulo.length >= 1){
	localStorage.removeItem(titulo);
	}
	
});

