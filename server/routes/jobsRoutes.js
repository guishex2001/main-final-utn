const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

// Ruta para obtener todos los trabajos
router.get('/jobs', jobsController.getAllJobs);

// Ruta para obtener un trabajo específico por su ID
router.get('/jobs/:id', jobsController.getJobById);

// Ruta para crear un nuevo trabajo
router.post('/jobs', jobsController.createJob);

// Ruta para actualizar un trabajo existente
router.put('/jobs/:id', jobsController.updateJob);

// Ruta para eliminar un trabajo existente
router.delete('/jobs/:id', jobsController.deleteJob);

module.exports = router;
