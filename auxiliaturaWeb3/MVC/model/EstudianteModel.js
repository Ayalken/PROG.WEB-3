import {db} from '../config/db.js'

export const ObtenerEstudiantes = async () => {
    const [resultado] = await db.query('SELECT * FROM estudiante');
    return resultado;
};

export const InsertarEstudiante = async (estudiante) => {
    const { nombre, apellido, edad, id_carrera } = estudiante;await db.query(
    'INSERT INTO estudiante(nombre, apellido, edad, id_carrera) VALUES (?, ?, ?, ?)',[nombre, apellido, edad, id_carrera]
    );
    return { message: 'Se inserto correctamente' };
};

export const ActualizarEstudiante = async (id_estudiante, estudiante) => {
    const { nombre, apellido, edad, id_carrera } = estudiante;
    const [resultado] = await db.query(
    'UPDATE estudiante SET nombre = ?, apellido = ?, edad = ?, id_carrera = ? WHERE id_estudiante = ?',[nombre, apellido, edad, id_carrera, id_estudiante]);
    return resultado;
};

export const EliminarEstudiante = async (id_estudiante) => {
    const [resultado] = await db.query('DELETE FROM estudiante WHERE id_estudiante = ?', [id_estudiante,]);
    return resultado;
};

export const ContarEstudiantes = async () => {
    const [resultado] = await db.query('SELECT COUNT(*) AS cantidad FROM estudiante');
    return resultado[0];
};