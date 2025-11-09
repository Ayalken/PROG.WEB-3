import express from 'express';
import {muestraProductos, insertaProducto, actualizaProducto} from '../controladores/productoControlador.js'

const rutas = express.Router();

rutas.get('/productos', muestraProductos);
rutas.post('/productos/adi', insertaProducto);
rutas.post('/productos/:id', actualizaProducto);
export default rutas;