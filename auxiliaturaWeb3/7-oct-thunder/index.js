import express from 'express';
const app = express();
app.use(express.json());

const validate = (nombre) => {
    let contador = 0;
    let longitud = nombre.length;

    for (let a of nombre) {
        if (a === "-" || a === "*" || a === "+" || longitud > 10) {
            contador++;
        }
    }
    if (contador > 0) {
        return true;
    } else {
        return false;
    }
};

app.post('/Usuario', (req, res) => {
    const { nombre, ci } = req.body;
    const regexNombre=/^[A-Za-z]{2,10}$/;
    const regexCi=/^[\d\w]{7,9}$/;

    if (regexNombre.test(nombre) && regexCi.test(ci)) {
        res.send("✅ Nombre y CI válidos");
    } else {
        res.send("❌ Nombre o CI no válidos");
    }
    console.log(nombre,ci);
});

app.post('/Empleado', (req, res) => {
    const { email } = req.body;
    const regexCorreo = /^[\w.-]+@[\w.-]+\.\w+$/;
    if (regexCorreo.test(email)) {
        res.send("✅ Email válido");
    } else {
        res.send("❌ Email no válido");
    }
    console.log(email);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Ejecutando en http://localhost:${PORT}`);
});
