import {ObtenerEstudiantes,InsertarEstudiante,ActualizarEstudiante,EliminarEstudiante,ContarEstudiantes} from '../model/EstudianteModel.js'

export const MostrarEstudiantes=async(req,res)=>{
    try{
        const resultado = await ObtenerEstudiantes();
        res.status(200).json(resultado);
    }catch(error){
        console.error(error);
        
    }
}
export const InsertarEstudiantes = async(req,res)=>{
    try{
        const resultado = await InsertarEstudiante(req.body);
        res.status(201).json(resultado)
    }catch(error){
        console.error(error);
    }

}

export const ActualizarEstudiantes = async (req, res) => {
    try {
    const id_estudiante = req.params.id_estudiante;
    const resultado = await ActualizarEstudiante(id_estudiante, req.body);

    if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: 'Estudiante no encontrado' });

    res.status(200).json({ mensaje: 'Estudiante actualizado correctamente' });
    } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al modificar el estudiante' });
    }
};

export const EliminarEstudiantes = async (req, res) => {
    try {
    const id_estudiante = req.params.id_estudiante;
    const resultado = await EliminarEstudiante(id_estudiante);

    if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    res.status(200).json({ mensaje: 'Estudiante eliminado correctamente' });
    } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el estudiante' });
    }
};

export const CantidadEstudiantes = async (req, res) => {
    try {
    const resultado = await ContarEstudiantes();
    res.status(200).json(resultado);
    } catch (error) {
    console.error(error);
    }
};