// cargar nuestra libreria
var currencyLib = require('./currency');
// 
var numero = parseFloat(process.argv[2]);
var opc = process.argv[3];
switch (opc){
case 'mxn':
console.log("su dinero fue de $"+numero+" mxn y en dolares vale: $"+
	currencyLib.mxToUsd(numero)+" USD.");
	break;
case 'usd':	
console.log("su dinero fue de $"+numero+" usd y en pesos vale: $"+
	currencyLib.usdToMxn(numero)+" mxn.");
	break;
	default:
	console.log("solo usd o mxn");
	break
}