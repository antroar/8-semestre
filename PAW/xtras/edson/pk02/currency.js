// Tipo de cambio
// Variable auxiliar
var mxnPerDollar = 17.00;
var mxnPerEuro = 18.00;

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
// convierte euros a pesos
exports.euroToMxn = function(euro){
	return roundTwoDecimal(euro * mxnPerEuro);
};
// convierte pesos a euros
exports.mxnToEuro = function(mxn){
	return roundTwoDecimal(mxn / mxnPerEuro);
};

// convierte dls a euros
exports.usdToEuro = function(usd){
	return roundTwoDecimal( usd * .99 );
};

// convierte euros a dls
exports.euroToUsd = function(euro){
	return roundTwoDecimal(euro / .99 );
};