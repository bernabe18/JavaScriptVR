"uses strict"
//funciones anonimas
//es una funcion que no tiene nombre


function sumame(numero1 ,numero2 ,sumaYmuestra ,sumaPorDos)
{
	var sumar =numero1 +numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar
	//callback son unas funciones anonimas.
}
sumame(5 ,7 ,dato =>
{
	console.log("la suma es :",dato);
},
	dato =>
{
	console.log("la suma por dos es :",(dato*2));
});

