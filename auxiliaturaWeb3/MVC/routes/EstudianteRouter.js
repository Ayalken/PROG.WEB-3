import express from 'express';
import {MostrarEstudiantes,InsertarEstudiantes,ActualizarEstudiantes,EliminarEstudiantes,CantidadEstudiantes} from '../controller/EstudianteController.js';

const Router = express.Router();

Router.get('/', MostrarEstudiantes);
Router.post('/', InsertarEstudiantes);
Router.put('/:id_estudiante', ActualizarEstudiantes);
Router.delete('/:id_estudiante', EliminarEstudiantes);
Router.get('/cantidad', CantidadEstudiantes);

export default Router;
