import express from 'express';
import {MostrarCarreras,InsertarCarreras,ActualizarCarreras,EliminarCarreras,ObtenerEstudiantePorCarreras} from '../controller/CarreraController.js';

const Router = express.Router();

Router.get('/', MostrarCarreras);
Router.post('/', InsertarCarreras);
Router.put('/:id_carrera', ActualizarCarreras);
Router.delete('/:id_carrera', EliminarCarreras);
Router.get('/obtener/:id_carrera', ObtenerEstudiantePorCarreras);

export default Router;
