"uses strict"

//crear una plantilla de texto en el valor de una variable

var nombre =prompt("me te tu nombre");
var apellidos=prompt("mete tus apellidos ");
 
 //interpolando variables con dolar y llaves.
var texto=
`
	<h1>hola que tal</h1>
	<h3>mis nombre es :${nombre}</h3>
	<h3>mis apellidos es :${apellidos}</h3>
	
`;
	
 

 document.write(texto);