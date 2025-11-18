import express from 'express';
import * as nunjucks from 'nunjucks';
import path from 'path';
import router from './routes/index.routes';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Configuración de Nunjucks
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,  // Para escapar automáticamente variables
  express: app        // Pasar la instancia de Express
});

// Configurar la carpeta para vistas y el motor de plantillas
app.set('view engine', 'njk');  // Usamos "njk" como la extensión de los archivos de plantillas
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
  // res.render('index', { title: 'Mi Proyecto con Nunjucks', name: 'Juan' });
  res.render('login');
});
app.use('/', router)
app.use((req, res) => {
    res.status(404).render(__dirname + '/views/pages/notFound.njk');
});


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
