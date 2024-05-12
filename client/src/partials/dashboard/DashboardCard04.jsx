import React from 'react';

function ContactCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5">

      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Contáctame</h2>
      <div className="flex items-center mb-4">
        <i className="devicon-location-1 text-4xl text-gray-600 mr-2"></i>
        <p className="text-gray-600">Argentina, Catamarca Capital</p>
      </div>
      <div className="flex items-center mb-4">
        <i className="devicon-phone text-4xl text-gray-600 mr-2"></i>
        <p className="text-gray-600">+54 266 464 9201</p>
      </div>
      <div className="flex items-center mb-4">
        <i className="devicon-email text-4xl text-gray-600 mr-2"></i>
        <p className="text-gray-600">supraguille@gmail.com</p>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
        WhatsApp
      </button>
    </div>
  );
}

export default ContactCard;
