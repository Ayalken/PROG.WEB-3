import express from 'express';
import {check, validationResult} from "express-validator";
const app = express();
app.use(express.json());


app.post(
    '/adicion',
    [
        check('nombre', ' Nombre inválido').isAlpha().notEmpty(),
        check('email', ' Email no válido').isEmail(),
        check('nota', ' Nota inválida').isFloat({ min: 0, max: 100 }),
        check('password', ' Contraseña inválida')
            .isLength({ min: 8 })
            .matches(/[a-zA-Z]/)
            .matches(/\d/)
            .matches(/[^a-zA-Z0-9]/)
    ],
    (req, res) => {

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
