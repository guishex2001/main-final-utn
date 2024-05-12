import React from 'react';

function TechStackCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Stack Tecnológico</h2>
      {/* Agrega el enlace al archivo CSS de Devicons */}
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <div className="flex flex-wrap justify-around items-center">
        <TechIcon name="Python" />
        <TechIcon name="React" />
        <TechIcon name="Node.js" />
        <TechIcon name="Laravel" />
        <TechIcon name="MySQL" />
        <TechIcon name="Git" />
        <TechIcon name="PHP" />
        <TechIcon name="Arduino" />
        <TechIcon name="WordPress" />
      </div>
      {/* Centra el texto y ajusta el tamaño de la fuente */}
      <p className="text-sm text-gray-600 mt-4 text-center">He contribuido en proyectos de gran impacto.</p>
    </div>
  );
}

function TechIcon({ name }) {
  // Mapea los nombres de tecnologías a las clases de iconos
  const iconClasses = {
    "Python": "devicon-python-plain",
    "React": "devicon-react-original",
    "Node.js": "devicon-nodejs-plain",
    "Laravel": "devicon-laravel-plain",
    "MySQL": "devicon-mysql-plain",
    "Git": "devicon-git-plain",
    "PHP": "devicon-php-plain",
    "Arduino": "devicon-arduino-plain",
    "WordPress": "devicon-wordpress-plain"
  };

  return (
    <div className="m-3 text-center">
      {/* Aumenta el tamaño de los iconos */}
      <i className={`icon ${iconClasses[name]} text-5xl`} title={name}></i>
      <p className="text-xs mt-2">{name}</p>
    </div>
  );
}

export default TechStackCard;
