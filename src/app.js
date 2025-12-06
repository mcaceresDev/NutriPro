const express = require("express")
const cors = require("cors")
const nunjucks = require('nunjucks');
const path = require("path")
const router = require("./routes/index.routes");
const { sessionMiddleware } = require('./config/session');
const { default: puppeteer } = require("puppeteer");
// const { morganToPino } = require("./middlewares/morgan.middleware");
// const requestInfoMiddleware = require("./middlewares/requestInfo.middleware");


const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())
app.use(sessionMiddleware);
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Morgan 
// app.use(morganToPino);
// app.use(requestInfoMiddleware);

// Configuración de Nunjucks
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,  // Para escapar automáticamente variables
  express: app        // Pasar la instancia de Express
});

// Configurar la carpeta para vistas y el motor de plantillas
app.set('view engine', 'njk');  // Usamos "njk" como la extensión de los archivos de plantillas
app.set('views', path.join(__dirname, 'views'));


// ===========================================================================================
// LOGICA DE REPORTE
// ===========================================================================================
app.get("/reporte", (req, res) => {
  res.render("report.njk");
});
// Ruta para generar PDF
app.get("/reporte/pdf", async (req, res) => {
  // Renderizar HTML como string
  const html = nunjucks.render("report.njk");

  // Lanzar Puppeteer
  const browser = await puppeteer.launch({
    headless: "new",
    // args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  // Cargar HTML
  await page.setContent(html, {
    waitUntil: "networkidle0",
  });

  // Generar PDF
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "20mm", bottom: "20mm" },
  });

  await browser.close();

  // Mandar PDF al cliente
  res.set({
    "Content-Type": "application/pdf",
    "Content-Length": pdf.length,
    "Content-Disposition": "attachment; filename=reporte.pdf",
  });

  res.send(pdf);
});
// ===========================================================================================





app.get('/', (req, res) => {
  // res.render('index', { title: 'Mi Proyecto con Nunjucks', name: 'Juan' });
  if (req.session.user) {
    return res.redirect("nutrientes")
  }
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


