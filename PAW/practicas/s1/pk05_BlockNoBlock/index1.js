// Non Blocking Model
// -------------------
// cargando la libreria
var fs = require('fs');

// manejador
var manejador = function(error, data){
if(error){
	console.log("Error al leer un archivo...");
	return;
}else{
console.log(data);
}	
};
// lectura no bloqueante o asincrona
fs.readFile("\documento.txt","utf-8", manejador);
// otra operacion
console.log('Termino el programa...');