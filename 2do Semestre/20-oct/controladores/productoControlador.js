import {obtTodo, inserta, actualiza, elimina} from '../modelos/productomodelo.js';
export const muestraProductos = async (req, res) => {
try {
const resultado = await obtTodo();
res.json(resultado);
} catch (error) {
res.status(500).json({ error: error.message });
}
};
