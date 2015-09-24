// cargar nuestra libreria
var currencyLib = require('./currency');
// 
var numero = parseFloat(process.argv[2]);
var opc = process.argv[3];
var opc2 = process.argv[5];

switch (opc){
case 'mxn':
if (opc2 == 'usd'){
console.log("su dinero fue de $"+numero+" mxn y en dolares vale: $"+
	currencyLib.mxToUsd(numero)+" USD.");
	}else{
console.log("su dinero fue de $"+numero+" mxn y en euros vale: $"+
	currencyLib.mxnToEuro(numero)+" EUROS.");
	}
	break;
	
case 'usd':
if (opc2 == 'mxn'){
console.log("su dinero fue de $"+numero+" dls y en Mexicanos vale: $"+
	currencyLib.usdToMxn(numero)+" MXN.");
	}else{
console.log("su dinero fue de $"+numero+" dls y en euros vale: $"+
	currencyLib.usdToEuro(numero)+" EUROS.");
	}
	
	break;
	case 'euro':
if (opc2 == 'mxn'){
console.log("su dinero fue de $"+numero+" euro y en Mexicanos vale: $"+
	currencyLib.euroToMxn(numero)+" MXN.");
	}else{
console.log("su dinero fue de $"+numero+" euro y en dls vale: $"+
	currencyLib.euroToUsd(numero)+" USD.");
	}
	
	break;
	default:
	console.log("Usa el formato usd, euro o mxn de forma valor + moneda + to + moneda");
	break
}