var express = require('express');

var app = express();

// Rutas
app.get('/', (Request, Response, next) => {

    Response.status(200).json({
       ok: true,
       mensaje: 'Peticion realizada correctamente' 
    });
    
    });

module.exports = app;