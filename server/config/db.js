// db.js

const Sequelize = require('sequelize');

// Configurar la conexión a la base de datos
const sequelize = new Sequelize('proyectofinal', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Elige el dialecto de tu base de datos
});

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente con la base de datos.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
