import {db} from '../config/db.js';


export const ObtenerCarreras =async()=>{
  const [resultado] = await db.query('SELECT * FROM carrera')
    return resultado;
}

export const InsertarCarrera =async(carrera)=>{
    const {nombre}= carrera;
    await db.query('INSERT INTO carrera(nombre) VALUES(?)',[nombre])
    return {message:"Se inserto correctamente"}
}
export const ActualizarCarrera = async(id_carrera,carrera)=>{
    const {nombre} = carrera;
    await db.query('UPDATE carrera SET nombre = ? WHERE id_carrera = ?',[nombre,id_carrera]);
    return {message:"Se actualizo la carrera"}
}
export const EliminarCarrera = async (id_carrera) => {
    const [resultado] = await db.query('DELETE FROM carrera WHERE id_carrera = ?', [id_carrera,]);
    return resultado;
};
export const ObtenerEstudiantePorCarrera=async(id_carrera)=>{
    const [resultado] = await db.query(`SELECT c.nombre as carrera,e.nombre
                    FROM carrera c,estudiante e
                    WHERE c.id_carrera = e.id_carrera
                    AND c.id_carrera = ? `,[id_carrera])
    return resultado;
}