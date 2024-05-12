import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import JobsBanner from '../partials/dashboard/JobsBanner';
import JobsCard from '../partials/dashboard/JobsCard';

function JobsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Función para cargar los trabajos desde el backend al cargar la página
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error al obtener los trabajos:', error);
      }
    };

    fetchJobs();
  }, []); // Se ejecuta solo una vez al cargar la página

  // Función para eliminar un trabajo
  const handleDeleteJob = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/jobs/${id}`);
      // Actualizar la lista de trabajos después de eliminar
      const updatedJobs = jobs.filter(job => job.id !== id);
      setJobs(updatedJobs);
    } catch (error) {
      console.error('Error al eliminar el trabajo:', error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <JobsBanner />
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Mostrar cada trabajo como un componente JobsCard */}
              {jobs.map(job => (
                <JobsCard
                  key={job.id}
                  job={job}
                  onDelete={handleDeleteJob} // Pasar la función de eliminación como prop
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default JobsPage;
