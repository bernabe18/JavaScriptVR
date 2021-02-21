 "use strict"
	 //parametro REST y SPREAD
	//parametro tipo REST que lo que hace es que agarra el resto de los datos y los guarda en en un array.
 	//dentro del parametro
 	function listadoFrutas(fruta1 ,fruta2 ,resto_de_frutas)
	 {
	 	console.log("fruta 1: " ,fruta1);
	 	console.log("fruta2 : ",fruta1);
	 	console.log(resto_de_frutas);
	 }
 	listadoFrutas("Naranja" ,"manzana" ," sandia " ,"sandia ", "melon ","coco");
 		var frutas=["Naranja ", "Manzana "];
	//parametro tipo SPREAD en un ARRAY
	listadoFrutas(...fruta "Naranja" ,"manzana" ," sandia " ,"sandia ", "melon ","coco"); 