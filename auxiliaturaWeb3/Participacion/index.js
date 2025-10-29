import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

app.post(
    '/registro',
    [
    body('nombre')
        .notEmpty()
        .withMessage('El nombre es obligatorio.')
        .isLength({ min: 3, max: 20 })
        .withMessage('El nombre debe tener entre 3 y 20 caracteres.')
        .isAlpha('es-ES', { ignore: ' ' })
        .withMessage('El nombre solo puede contener letras.'),

    body('email')
        .notEmpty()
        .withMessage('El email es obligatorio.')
        .isEmail()
        .withMessage('Debe ingresar un correo electrónico válido.'),

    body('edad')
        .notEmpty()
        .withMessage('La edad es obligatoria.')
        .isInt({ min: 18, max: 100 })
        .withMessage('La edad debe ser un número entero entre 18 y 100.'),

    body('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria.')
        .isLength({ min: 6 })
        .withMessage('La contraseña debe tener al menos 6 caracteres.')
        .matches(/\d/)
        .withMessage('La contraseña debe incluir al menos un número.'),
    ],
    (req, res) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
        ok: false,
        errores: errores.array(),
        });
    }

    res.json({
        ok: true,
        msg: 'Usuario registrado',
        datos: req.body,
    });
    }
);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
