import {ObtenerCarreras,InsertarCarrera,ActualizarCarrera,ObtenerEstudiantePorCarrera} from '../model/CarreraModel.js'

export const MostrarCarreras=async(req,res)=>{
    try{
        const resultado = await ObtenerCarreras();
        res.status(200).json(resultado);    
    }catch(error){
        console.error(error);
    }
    
}
export const InsertarCarreras=async(req,res)=>{
    try{
        const resultado = await InsertarCarrera(req.body);
        res.status(201).json(resultado)
    }catch(error){
        console.error(error);
    }
}
export const ActualizarCarreras =async(req,res)=>{
    try{
        const id_carrera = req.params.id_carrera;
        const resultado = await ActualizarCarrera(id_carrera,req.body);
        res.status(200).json(resultado);
    }catch(error){
        console.error(error);
    }
}
export const EliminarCarreras = async (req, res) => {
    try {
    const id_carrera = req.params.id_carrera;
    const resultado = await EliminarCarrera(id_carrera);

    if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: 'Carrera no encontrada' });

    res.status(200).json({ mensaje: 'Carrera eliminada correctamente' });
    } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar la carrera' });
    }
};

export const ObtenerEstudiantePorCarreras=async(req,res)=>{
    try{
        const resultado = await ObtenerEstudiantePorCarrera(req.params.id_carrera);
        console.log(resultado);
        res.status(200).json(resultado);
    }catch(error){
        console.error(error);
    }
}