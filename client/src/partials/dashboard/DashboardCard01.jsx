import React from 'react';

function ProfileCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5">
      {/* Importa los estilos de Devicons */}
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <div className="flex justify-start items-center mb-4">
        {/* Utiliza la imagen proporcionada */}
        <img 
          src="https://avatars.githubusercontent.com/u/91160700?s=400&u=ba32322f301754eeeb29df599b63657441284d80&v=4" 
          alt="Profile" 
          className="profile-img border border-gray-400 w-24 h-24 mr-4 bg-black text-white"

        />
        <div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Guille García</h2>
          <p className="text-sm text-gray-600">Apasionado de la tecnología | Amante de la música | Gamer | Ajedrecista | Desarrollador Fullstack</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {/* Agrega enlaces a tus redes sociales */}
        <a href="https://www.linkedin.com/in/guilledataanalytics2001/" className="text-gray-600 hover:text-gray-900 mx-2 text-2xl">
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="https://drive.google.com/file/d/1nLHcjAWnlWdOiQKESOEE3OGWirc2_prn/view" className="text-gray-600 hover:text-gray-900 mx-2 text-2xl">
          <i className="devicon-devicon-plain"></i>
        </a>
        <a href="https://github.com/guishex2001" className="text-gray-600 hover:text-gray-900 mx-2 text-2xl">
          <i className="devicon-github-plain"></i>
        </a>
      </div>
      <p className="text-xs text-gray-600 text-center mt-2">LinkedIn | CV | GitHub</p>
    </div>
  );
}

export default ProfileCard;
