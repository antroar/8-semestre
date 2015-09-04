//tipos de funciones en JS 
//declaracion de funciones
saluda("pepe");

function saluda(name){
	console.log("Hola "+name);
}
//function expressions
var despide = function(name){
console.log("adios "+name);	
};
despide("antonio");



//las funciones son diferentes, veremos las diferencias al copilar. la primera funcion se ejecuta en cualquier parte del codigo
//mientras el segundo lleva un seguimiento, no puede ejecutar la funcion sin averla definido
