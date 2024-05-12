import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import EditJobsBanner from '../partials/dashboard/EditJobsBanner';
import EditJobsCard from '../partials/dashboard/EditJobsCard';

function EditJobsPage({ params }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const jobId = params.id; // Accede al parámetro "id" de la URL

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
            <EditJobsBanner />

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Trabajos */}
              <EditJobsCard jobId={jobId} /> {/* Pasa el jobId como prop */}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default EditJobsPage;
