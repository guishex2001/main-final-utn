// jobsController.js

//const Job = require('../models/jobModel.js');

const Job = require ("../models/jobmodel");

const transporter = require('../config/nodemailer');

// Crear un nuevo trabajo y enviar correo electrónico
exports.createJob = async (req, res) => {
  try {
    const { title, description, client, technology } = req.body;
    const newJob = await Job.create({ title, description, client, technology });

    // Envío de correo electrónico
    await transporter.sendMail({
        from: 'ejemplo@codecat.site', // Tu dirección de correo electrónico del panel Feroso
        to: 'supraguille@gmail.com', // reemplazar mail donde quieras que te lleguen el aviso por mail
      subject: 'Nuevo trabajo creado',
      text: `Se ha creado un nuevo trabajo: ${title}`
    });

    res.status(201).json({ success: true, job: newJob });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// Obtener todos los trabajos
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Obtener un trabajo por su ID
exports.getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findByPk(jobId);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Trabajo no encontrado' });
    }
    res.status(200).json({ success: true, job });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Actualizar un trabajo existente
exports.updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const { title, description, client, technology } = req.body;
    const job = await Job.findByPk(jobId);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Trabajo no encontrado' });
    }
    await job.update({ title, description, client, technology });
    res.status(200).json({ success: true, job });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Eliminar un trabajo existente
exports.deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findByPk(jobId);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Trabajo no encontrado' });
    }
    await job.destroy();
    res.status(200).json({ success: true, message: 'Trabajo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
