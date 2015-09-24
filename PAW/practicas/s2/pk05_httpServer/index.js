// cargar el modulo que me permite crear un server basico
var http = require('http');
// variables de configuracion del server
var ip = process.env.IP || '127.0.0.1';
var port = process.env.PORT || 3000;
// construyendo el handler (manejador) que se ejecutara cuando llegue la supuesta peticion

var serverHandler = function (req, res) {
	// armar el encabezado
	res.writeHead(200, {
		'Content-Type': 'text/plain',
		'Server':'Node/0.12.7' 
	});
	// Armar el contenido
	res.write('Hola este es mi primer server...\n');
	res.write('Fuck yeah soy todo un web developer...');
	// cerrar conexion
	res.end();
	
};

// creando el server; se le pasa como parametro como handler al constructor del server
var server = http.createServer(serverHandler);

// poner a trabajar el server

server.listen(port, ip);

// registrar la puesta en marcha el server
console.log("> Server escuchando en http://%s:%s...",ip,port);
