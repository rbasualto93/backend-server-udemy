// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Rutas
app.get('/', (Request, Response, next) => {

Response.status(200).json({
   ok: true,
   mensaje: 'Peticion realizada correctamente' 
});

});

// Escuchar peticiones
var port = 3000;
app.listen(port, function() {
console.log('Express server port '+port+": \x1b[32m%s\x1b[0m",'online');
});