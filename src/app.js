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
const env = nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,  // Para escapar automáticamente variables
  express: app        // Pasar la instancia de Express
});

// Crear filtro startsWith
env.addFilter('startsWith', function(str, prefix) {
  if (typeof str !== 'string') return false;
  return str.startsWith(prefix);
});



// Configurar la carpeta para vistas y el motor de plantillas
app.set('view engine', 'njk');  // Usamos "njk" como la extensión de los archivos de plantillas
app.set('views', path.join(__dirname, 'views'));


// ===========================================================================================
// LOGICA DE REPORTE
// ===========================================================================================
app.get("/reporte", (req, res) => {

  const nutritionalMenu = {
    lunes: {
        desayuno: ["Avena", "Banano", "Leche descremada"],
        merienda1: ["Manzana"],
        almuerzo: ["Arroz", "Frijoles", "Pechuga de pollo", "Ensalada verde"],
        merienda2: ["Yogur natural"],
        cena: ["Tortilla de maíz", "Queso fresco", "Té"]
    },
    martes: {
        desayuno: ["Pan integral", "Huevo revuelto", "Café"],
        merienda1: ["Papaya"],
        almuerzo: ["Pasta integral", "Carne molida", "Vegetales"],
        merienda2: ["Galletas integrales"],
        cena: ["Sopa de verduras"]
    },
    miercoles: {
        desayuno: ["Cereal integral", "Leche"],
        merienda1: ["Banano"],
        almuerzo: ["Arroz", "Pescado al horno", "Ensalada"],
        merienda2: [],
        cena: ["Pan con aguacate"]
    },
    jueves: {
        desayuno: ["Avena", "Manzana"],
        merienda1: ["Yogur"],
        almuerzo: ["Arroz", "Lentejas", "Ensalada"],
        merienda2: ["Frutos secos"],
        cena: ["Crema de vegetales"]
    },
    viernes: {
        desayuno: ["Pan integral", "Queso", "Café"],
        merienda1: ["Pera"],
        almuerzo: ["Arroz", "Pollo asado", "Vegetales"],
        merienda2: ["Gelatina"],
        cena: ["Ensalada con atún"]
    },
    sabado: {
        desayuno: ["Panqueques", "Miel", "Leche"],
        merienda1: [],
        almuerzo: ["Arroz", "Carne asada", "Ensalada"],
        merienda2: ["Fruta"],
        cena: ["Sándwich integral"]
    },
    domingo: {
        desayuno: ["Gallo pinto", "Huevo", "Plátano"],
        merienda1: ["Jugo natural"],
        almuerzo: ["Indio viejo", "Ensalada"],
        merienda2: [],
        cena: ["Sopa ligera"]
    }
};

  res.render("report.njk", {nutritionalMenu});
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
    format: "Letter",
    landscape: true,
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




app.use((req, res, next) => {
  res.locals.currentPath = req.path;   // o req.originalUrl
  next();
});
app.use((req, res, next) => {
  if (req.session.user) {
    const { name, lastname } = req.session.user
    res.locals.userLogged = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`   // se guarda al iniciar sesion
  }
  if (!res.locals.userLogged) {
    res.locals.userLogged = "USERNAME"
  }
  next();
});
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


