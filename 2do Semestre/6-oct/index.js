//const express = require ('express')
import express from 'express';

const app = express();
app.use(express.json());

function validaNombre(cad) {
    for (let i = 0; i < cad.length; i++) {
        let car = cad.charCodeAt(i);
        if (!((65 <= car && car <= 90) || (97 <= car && car <= 122))) {
            return false;
        }
    }
    return true;
}
function validaNota(n) {
    if (1<=n&&n<=100)
        return true;
    else
        return false
}

function validaGmail(correo) {
    const regex = /@gmail\.com$/;
    return regex.test(correo);
}
function validaPassword(password){
    const tieneDigito = /\d/.test(password);
    const tieneLetra = /[a-zA-Z]/.test(password);
    const tieneEspecial = /[^a-zA-Z0-9]/.test(password);
        const tieneLongitud = password.length >= 8;
        return tieneDigito && tieneLetra && tieneEspecial && tieneLongitud;
}

/*app.post('/adicion', (req, res) => {
    const { nombre, sueldo, gmail } = (req.body);

    console.log("Cuerpo recibido:", req.body);

    if (!validaNombre(nombre)) {
        return res.send('Error: el nombre solo debe contener letras.');
    }

    if (!validaGmail(gmail)) {
        return res.send('Error: el correo debe ser un Gmail válido (ej: usuario@gmail.com).');
    }

    res.send(`Empleado ${nombre} con sueldo ${sueldo} y correo ${gmail} adicionado correctamente.`);
});

app.post('/empleado', (req, res) => {
    res.send('Mostrando la infromacion de Empleados');
});*/

app.post('/adicion', (req, res) => {
    //res.send(req.body)
    //res.send(req.body.nombre)
    let { nombre, email, password, nota } = req.body;
    console.log(nombre, email, password, nota);

    if (!validaNota(nota)) {
        return res.send("Datos incorrectos: nota inválida");
    }
    if (!validaPassword(password)) {
        return res.send("Datos incorrectos: password inválido");
    }
    res.send("Se inserto los datos");
});

const puerto = 3001;
app.listen(puerto, () => {  
    console.log(`Servidor en http://localhost:${puerto}`);
});
