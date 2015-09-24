// Tipo de cambio
// Variable auxiliar
var mxnPerDollar = 17.00;


// funcion de Redondedo
// funcion auxiliar
function roundTwoDecimal(amount){
	return Math.round(amount*100)/100;
	
}

// exportando funcion que convierte de usd to mxn

exports.mxToUsd = function(mxn){
	return roundTwoDecimal(mxn / mxnPerDollar);
};

// convierte de mxn to usd

exports.usdToMxn = function(usd){
	return roundTwoDecimal(mxnPerDollar * usd);
};

