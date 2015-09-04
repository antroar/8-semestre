console.log("El argumentos es: "+process.argv[2]);
console.log("\n Numeros del 0 al 9 ");
 var a = process.argv[2];
 var b = a.split(',');
 var suma = 0;
 var aux = String(a);
 var count = aux.replace(/,/gi,"");
  
 for(var i=0;i<=(count.length-1);i++){
var v1 = b[i]; 
 
 v1 = parseInt(v1);
 suma=v1+suma;
 	 
 }
  
 

 
console.log("La suma de ("+a +") el resultado es: "+suma);