'use strict'

/*un api rest es una red de servicios  back.end que nos devuelve datos en JSON puede recibir peticiones y peticiones por POS ,POOD , GET metodos http
 Fetch (ajax) y Peticiones a servicios / apis rest
 a el fetch le pasamos una url que escupa json como primer parametro y esto es una promesa y tenemos el
 metodo "then que lo que hace recoge datos y tiene una funcion de callback que nos va a convertir a convertir un objeto a json directamente y utilizable" 

fecht lo que hace es acceder a unos datos remotos (servicio remoto) hace la peticion y queda a la espera de uqe cuando recibamos esos datos 
los convirtamos a json lo formateomos a json una ves que ya lo tenemos formateado a json a la promesa se queda a la espera de otro 'then' 
y despues hacemos lo que queramos con esas data 

PRIMEROS PASOS EN LAS PROMESAS SON:

1) Capturar las datas
2) Convertir a json (objeto de javascript)
3) Guardamos los datos en un array 
4) Como valor tendra user.data
5) En listas esa data en el DOM

de esta manera voy a tener un array de objetos con la data de usuarios
*/

var div_usuarios=document.querySelector('#usuarios');
var div_janet=document.querySelector('#janet');
var div_profesor=document.querySelector('#profesor')

var usuarios=[];
//encadenamiento de promesas solo es posible cuando la anterior devuelve una promesa y se ejecutan segun su orden de encadenamiento 
	getUsuarios()
	.then(data => data.json())

	.then(users => {

		listadoUsuario(users.data);

		
		return getInfo();
		})
		.then(data =>{
			div_profesor.innerHTML=data;
			return getJanet();
		})
		.then(data => data.json())
		.then(user => {
			MostrarJanet(user.data);

		}).catch(error => {//capturar el error de una promesa con el metodo catch nos permitira captar con mas presición del error 
		console.log(error+'1');
		
		});
		

function getUsuarios(){

	return fetch('https://reqres.in/api/users');

}


function getJanet(){
	return fetch('https://reqres.in/api/users/2');

}
 // creamos objeto JSON
function getInfo(){
	var profesor={
		nombre:'victor',
		apellidos:'Roble',
		url: 'http://victorrobles.es'

	};
	
//crear una promesa desde cero
return new Promise((resolve , reject)=>{
	
	var profesor_string="";

	setTimeout(function(){
			profesor_string=JSON.stringify(profesor);
			if(typeof profesor_string != 'string' || profesor_string == '') return reject('error2');

				return resolve(profesor_string);

		}, 3000);

	});
	

}

function listadoUsuario(usuarios){

usuarios.map((user ,i)=>{

			let nombre=document.createElement('h3');
			
			nombre.innerHTML=i + ' ' + user.first_name + ' ' +user.last_name;
			
			div_usuarios.appendChild(nombre);

			document.querySelector('.loading').style.display='none';

		})


console.log(usuarios);

}

function MostrarJanet(user){

	console.log(user);

	let nombre=document.createElement('h4');
	let avatar=document.createElement('img');

	nombre.innerHTML=user.first_name + '__'+user.last_name;
	avatar.src=user.avatar;
	avatar.width ='100';



	div_janet.appendChild(nombre);
	div_janet.appendChild(avatar);

	document.querySelector('#janet .loading').style.display='none';


}


