'use strict'

window.addEventListener('load', function(){

	console.log('DOM cargado¡¡');

	
	var box_dashed=document.querySelector('.dashed');
	box_dashed.style.display='none';

	var formulario=document.querySelector('#formulario');
	formulario.addEventListener('submit',function(){
		console.log('evento submit capturado');

		var nombre=document.querySelector('#nombre').value;
		var apellido=document.querySelector('#apellido').value;
		var edad= parseInt(document.querySelector('#edad').value);

		if(nombre.trim() == null || nombre.trim().length==0){
			alert('el nombre nos es valido');
			document.querySelector('#error_nombre').innerHTML='el nombre no es valido';
			
			return false;

		}else{
			document.querySelector('#error_nombre').style.display='none';

		}
		if(apellido.trim() == null || apellido.trim().length==0){
			alert('los appellidos nos es valido');
			return false;

		}

		if(edad == null || edad <= 0 || isNaN(edad)){

			alert('edad no valido');
			return false;

		}

		box_dashed.style.display='block';

		var datos_usuario=[nombre ,apellido,edad];

		var indice;
		for(indice in datos_usuario){
			var parrafo=document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
		/*segunda manera para capturar datos de un formulario

		var p_nombre=document.querySelector('#nombre span' );
		var p_apellido=document.querySelector('#p_apellidos span');
		var p_edad=document.querySelector('#p_edad span');

		p_nombre.innerHTML=nombre;
		p_apellido.innerHTML=apellido;
		p_edad.innerHTML=edad;

	*/
		
		
	});

});

