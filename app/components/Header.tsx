import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Securo AI
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-2 px-3 text-white bg-blue-700 rounded">Dashboard</a>
            <a href="#" className="py-2 px-3 text-blue-100 hover:bg-blue-700 rounded">Nowa szkoda</a>
            <a href="#" className="py-2 px-3 text-blue-100 hover:bg-blue-700 rounded">Ustawienia</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
             <span className="text-blue-200">Zalogowano jako: <strong>admin</strong></span>
             <a href="#" className="py-2 px-3 text-blue-100 hover:bg-blue-700 rounded">Wyloguj</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
