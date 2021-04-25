'use strict'

/*
Eventos(espera de una accion de usuario) es la interaccion del usuario con la paginas mediantes hardware como el raton ,teclado 
*/
/*
Estamos viendo los tipos de eventos que podemos capturar mediante las propiedades de HTML y darle una funcionalida y,cambiar su estilo mediante JS y encapsular 
todo este codigo de una manera omtima y limpia sin tener que estar poniendo lineas de codigos JS en HTML
utilizando el metodo y poniendole estos parametros addEventListener('evento a indicar',funcion(anonima){intrucciones}) 
*/

//EVENTOS DEL RATON
//con esta funcion estamos capturando los eventos click del raton y cambiar el color del boton
//con el evento load podemos poner nuestro script en el head del la eatiqueta del HTML 
//y se ejecuta cada ves que la pagina completa se alla cargado.
window.addEventListener('load',()=>{

		function cambiarColor(){
	console.log('me has dado click');		

		var bg=boton.style.background;

		if(bg =='green'){

			boton.style.background='red';
		}else{
			
			boton.style.background='green';
		}
		//mas estilizado la caja de presioname
			boton.style.padding='10px';
			boton.style.border='1px solid #ccc';

		return true;
		}

	var boton =document.querySelector("#boton");
	//EVENTO DEL CLICK
	//addEventListener es similar al queryselector nos permite
	//tomar una propiedad de HTML y pasarle una funcion anonima para hacer lo que quisieramos.
	boton.addEventListener('click',function(){
		cambiarColor();
		this.style.border='10px solid black';// el operador THIS hace referencia al objetos que estamos utilizando con algun evento .
	});

	//mouse over
	boton.addEventListener('mouseover',function(){
		boton.style.background='#ccc';
	});

	//moseuout

	boton.addEventListener('mouseout',function(){
		boton.style.background='purple';
	});

	//eventos 
	//Focus nos indica cuando estamos dentro de la propiedad seleccionada
	var input =document.querySelector('#campo_nombre');

	input.addEventListener('focus',function(){
		console.log('[focus]estas dentro del input');
	});

	//Blur nos indica cuando no estamos fuera de la propiedad 
	input.addEventListener('blur',function(){
		console.log('[blur]]estas fuera del imput');
	});

	//Keydown captura de las teclas pulsadas por el usaurio 
	input.addEventListener('keydown',function(event){
		console.log('[keydown]solo cuando se pulsando una tecla ', String.fromCharCode(event.keyCode));
	});


	//Keypress nos indica la tecla pulsada por el usario
	input.addEventListener('keypress',function(event){
		console.log('[keypress]tecla presionada ', String.fromCharCode(event.keyCode));
	});

	//Keyup nos dice cuando dejamos de pesionar la teclas 

	input.addEventListener('keyup',function(event){
		console.log('[keyup]nos indica cuando levantamos el dedo de la tecla ', String.fromCharCode(event.keyCode));
	});
});
