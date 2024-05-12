import React, { useState } from 'react';
import axios from 'axios';

function NewJobsCard({ onAddJob }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [technology, setTechnology] = useState('');
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/jobs', {
        title,
        description,
        client,
        technology
      });
      // Llamar a la función onAddJob con el nuevo trabajo añadido
      onAddJob(response.data.job);
      // Limpiar los campos del formulario después de agregar el trabajo
      setTitle('');
      setDescription('');
      setClient('');
      setTechnology('');
      // Mostrar la notificación de éxito
      setNotification('Trabajo agregado exitosamente');
      // Ocultar la notificación después de 3 segundos
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error) {
      console.error('Error al agregar el trabajo:', error);
    }
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título del trabajo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2"
            required // Campo obligatorio
          />
          <textarea
            placeholder="Descripción breve del trabajo"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-2"
            required // Campo obligatorio
          />
          <input
            type="text"
            placeholder="Cliente"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="mb-2"
            required // Campo obligatorio
          />
          <input
            type="text"
            placeholder="Tecnología"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            className="mb-2"
            required // Campo obligatorio
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
            Agregar Trabajo
          </button>
        </form>
        {/* Mostrar la notificación de éxito si está presente */}
        {notification && (
          <div className="mt-2 p-2 bg-green-500 text-white rounded">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewJobsCard;
