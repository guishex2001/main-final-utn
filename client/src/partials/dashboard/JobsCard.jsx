import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../../components/DropdownEditMenu';

function JobsCard({ job, onDelete }) {
  const { id, title, description, client, technology } = job;

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <div className="ml-auto">
            <EditMenu align="right" className="relative inline-flex">
             
              <li>
                <button className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" onClick={() => onDelete(id)}>
                  Eliminar
                </button>
              </li>
            </EditMenu>
          </div>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{title}</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">{description}</div>
        <div className="flex items-start">
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100 mr-2">Cliente: {client}</div>
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100 mr-2">Tecnología: {technology}</div>
        </div>
      </div>
    </div>
  );
}

export default JobsCard;
