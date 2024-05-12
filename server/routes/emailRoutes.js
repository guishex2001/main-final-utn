const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Ruta para enviar un correo electrónico
router.post('/send-email', emailController.sendEmail);

module.exports = router;
