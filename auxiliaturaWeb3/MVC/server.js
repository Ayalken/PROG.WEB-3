
import RouterCarrera from './routes/CarreraRoute.js'
import RouterEstudiante from './routes/EstudianteRouter.js'
import express from 'express';

const app = express();

app.use(express.json());
app.use('/carrera',RouterCarrera);
app.use('/estudiante',RouterEstudiante);

const PORT =3005;
app.listen(PORT,()=>{
    console.log(`Corriendo en http://localhost:${PORT}`);
})
