import {db} from '../config/db.js';
export const obtTodo = async () => {
const [resultado] = await db.query('SELECT * FROM productos');
return resultado;
};

