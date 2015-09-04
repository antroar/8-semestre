// funciones como primera clase
var funcionSaludar = function (nombre){
console.log("hola %s",nombre);	
};

var funcionDespide = function (nombre){
console.log("Adios "+nombre);	
};

// construir manejadores (handlers - delegados)
var mensaje = function(nombre, handler){
handler(nombre);	
};

// usando la funcion mensaje
mensaje("Antonio",funcionDespide);