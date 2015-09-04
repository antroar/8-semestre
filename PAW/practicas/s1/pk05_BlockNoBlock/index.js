// blocking model
// Programa que lee un archivo de forma bloqueante

// cargar un modulo nativo de node que me permite leer archivos.
var fs = require('fs'); // file stream (flujo de archivos)
// leyendo el archivo
var contenido = fs.readFileSync('\documento.txt','utf-8');
console.log(contenido);
// Haciendo otra operacion
console.log('El programa termino....');