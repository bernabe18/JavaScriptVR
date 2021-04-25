'use strict'

//BOM (BROWSER OBJECT MODEL) trabajar con el navegador .

/*con esta amanera nos va a decir que tamaño tiene  la pantalla actualmente
dependiendo si la ubieramos encogido la pantalla nos dira cuanto tendra 

console.log(window.innerHeigth);
console.log(window.innerwidth);
*/


//de esta manera nos dira el tamaño total de la pantalla

function getBom(){
	console.log(screen.Heigth);
	console.log(screen.width);
	console.log(window.location);//Nos muestra el objeto de location de la pagina y nos permite usar todas sus propiedades
	console.log(window.location.href);//de esta manera podemos tomar el href desde lacation y podemos modificarla a nuestro gusto
}

//esta funcion esta echa para cambiarle la url y que nos redirija a la nueva url que le indiquemos
function redirect(url){
	window.location.href=url;
}

//esta funcion nos sirve para abrir una ventana nueva que por primer parametro le vamos a pásar una url 
//como segundo y tercer parametro seran para decir que propiedades va a tener esa ventana nueva
function abrirVentana(url){
	window.open(url ,"","width=400,heigth=300");
}

