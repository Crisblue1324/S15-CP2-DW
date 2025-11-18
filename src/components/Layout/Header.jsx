import React, { useState } from 'react';

const Header = ({ setCurrentScreen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 flex items-center justify-between">
      {/* Menú desplegable */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          ☰ Menú
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
            <ul className="flex flex-col">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setCurrentScreen('home'); setIsMenuOpen(false); }}
              >
                Inicio
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setCurrentScreen('species'); setIsMenuOpen(false); }}
              >
                Especies
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setCurrentScreen('timeline'); setIsMenuOpen(false); }}
              >
                Resultados de especies
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setCurrentScreen('cluster'); setIsMenuOpen(false); }}
              >
                Clústeres
              </li>
            </ul>
          </div>
        )}
      </div>

      <h1 className="text-xl font-bold">Panel de Biodiversidad Urbana</h1>
    </header>
  );
};

export default Header;
