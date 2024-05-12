const nodemailer = require('nodemailer');

// Configura el transporte SMTP
const transporter = nodemailer.createTransport({
  host: 'c2211766.ferozo.com',
  port: 465, // Puerto SMTP de Feroso
  secure: true, // Usar SSL
  auth: {
    user: 'ejemplo@codecat.site', // Tu dirección de correo electrónico del panel Feroso
    pass: '/OIiz924hY' // Tu contraseña de correo electrónico
  }
});

module.exports = transporter;