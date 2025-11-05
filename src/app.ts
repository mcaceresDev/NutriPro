import express from 'express';
import * as nunjucks from 'nunjucks';
import path from 'path';

const app = express();
const port = 3000;

// Configuración de Nunjucks
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,  // Para escapar automáticamente variables
  express: app        // Pasar la instancia de Express
});

// Configurar la carpeta para vistas y el motor de plantillas
app.set('view engine', 'njk');  // Usamos "njk" como la extensión de los archivos de plantillas

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.render('index', { title: 'Mi Proyecto con Nunjucks', name: 'Juan' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
