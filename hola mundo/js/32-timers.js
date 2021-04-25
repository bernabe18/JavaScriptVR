'use strict'

//funciones de TIMERS (timpos ,temporilizadores) 

window.addEventListener('load',function(){
	//timers 
	//setinterval nos permite ejecutar una funcion de callback cada determinado segundos como una especie de bucle .
	//el setTimeout solo se ejecuta una sola vez 
	//var tiempo=setTimeout(function(){
	function Intervalo(){
	var tiempo=setInterval(function(){
		console.log('setinterval ejecutado');

		var encabezado =document.querySelector('h1');

		if(encabezado.style.fontSize =='50px'){
			encabezado.style.fontSize='30px';
		}else{
		encabezado.style.fontSize='50px';
		}
		
	},3000);
	return tiempo;
	}

	var tiempo=Intervalo();
	
	var stop =document.querySelector('#stop');
	stop.addEventListener('click',function(){
		alert('has para el intervalo');
		clearInterval(tiempo);
	});
	var start=document.querySelector('#start');
	start.addEventListener('click',function(){
		alert('has inciado el bucle');
		Intervalo();
	});

}); 