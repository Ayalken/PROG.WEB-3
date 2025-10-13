import express from 'express';
import { check, validationResult } from "express-validator";

const app = express();
app.use(express.json());

app.post('/adicion', [
    check('nombre', 'Nombre incorrecto').notEmpty(),
    check('email', 'Eso no parece un Email').isEmail(),
    check('nota', 'Nota incorrecta').isFloat({ min: 0, max: 100 })
], (req, res) => {

    console.log("Datos recibidos:", req.body); 

    let resultado = validationResult(req);
    if (!resultado.isEmpty()) {
        return res.json({
            ok: false,
            errores: resultado.array()
        });
    }

    res.json({
        ok: true,
        msg: "Se insertó correctamente los datos",
        datos: req.body
    });
});

const puerto = 3001;
app.listen(puerto, () => {  
    console.log(`Servidor en http://localhost:${puerto}`);
});
