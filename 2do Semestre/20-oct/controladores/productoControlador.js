import {obtTodo,inserta} from '../modelos/productomodelo.js';
export const muestraProductos = async (req, res) => {
    try {
        const resultado = await obtTodo();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const insertaProducto =async (req,res) => {
    try{
        const resultado =await inserta();
        res.json(resultado);
    } catch(error) {
        res.status(500).json({ error:error.message});
    }
};
export const actualizaProducto =async (req,res) => {
    try{
        const resultado =await actualiza();
        res.json(resultado);
    } catch(error) {
        res.status(500).json({ error:error.message});
    }
};

