// Importar las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const exphbs = require('express-handlebars').create(); // Cambiado aquí

// Importar las rutas de jobs
const jobsRoutes = require('./routes/jobsRoutes');

// Crear una instancia de Express
const app = express();

// Configurar middleware
app.use(bodyParser.json()); // Para analizar solicitudes JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para analizar solicitudes URL-encoded
app.use(cors()); // Permitir solicitudes desde cualquier origen (debes ajustar esto en producción)

// Configurar Handlebars
app.engine('handlebars', exphbs.engine); // Cambiado aquí
app.set('view engine', 'handlebars');

// Montar las rutas de jobs
app.use('/', jobsRoutes);

// Definir el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 5000; // Puedes definir cualquier puerto que desees

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando correctamente!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
