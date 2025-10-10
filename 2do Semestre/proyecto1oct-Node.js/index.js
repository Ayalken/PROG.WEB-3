//const express = require ('express')
import express from 'express';

const app = express();

app.get('/eliminacion', (req, res) => {
    res.send('Eliminacion de datos');
});

app.get('/adicion', (req, res) => {
    res.send('adiciona de Empleados');
});

app.get('/actualizacion', (req, res) => {
    res.send('actualizacion de Empleados');
});

const puerto = 3001;
app.listen(puerto, () => {  
    console.log(`Servidor en http://localhost:${puerto}`);
});