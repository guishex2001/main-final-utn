import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  createBrowserRouter
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import JobsPage from './pages/JobsPage';
import NewJobsPage from './pages/NewJobsPage';
import Seccion1 from './pages/Seccion1';
import Seccion2 from './pages/Seccion2';
import EditJobsPage from './pages/EditJobsPage';
function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dashboard/trabajos" element={<JobsPage />} />
        <Route exact path="/dashboard/agrega-un-trabajo" element={<NewJobsPage />} />
        <Route exact path="/dashboard/trabajos/${id}/edit" element={<EditJobsPage />} />

        <Route exact path="/dashboard/seccion1" element={<Seccion1 />} />
        <Route exact path="/dashboard/seccion2" element={<Seccion2 />} />

      </Routes>
    </>
  );
} 

export default App;
