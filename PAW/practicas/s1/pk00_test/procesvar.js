// variable process
// me permite acceder a los argumentos que son pasados a un programa de node desde la linea de comandos.
//ejemplo

console.log("Los argumentos pasados desde la linea de comandos son: "+process.argv);

console.log("El tipo de dato de  process es: "+typeof(process.argv));
console.log("El primer elemento del vector argumentos es: "+process.argv[0]);
console.log("El segundo elemento del vector argumentos es: "+process.argv[1]);
console.log("El tercer elemento del vector argumentos es: "+process.argv[2]);