// Haciendo un closure
function retormaFuncionSaludo(){
	var mensaje = "Hola Roa...";
	return function(){
		console.log(mensaje);
	}
}
var saludar = retormaFuncionSaludo();
saludar();

//investigar closure
