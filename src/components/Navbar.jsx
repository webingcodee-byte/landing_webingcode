
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#hero"
          className="flex items-center gap-x-1 group text-navy"
        >
          <img
            src={logo}
            alt="WebingCode"
            className="w-20 h-20 pl-1 object-contain transition-transform group-hover:scale-105"
          />

          <span className="text-2xl font-bold">
            Webing<span className="text-cyan">Code</span>
          </span>
        </a>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">

          <a
            href="#hero"
            className="hover:text-blue transition-colors"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="hover:text-blue transition-colors"
          >
            Servicios
          </a>

          <a
            href="#proyectos"
            className="hover:text-blue transition-colors"
          >
            Proyectos
          </a>

          <a
            href="#clientes"
            className="hover:text-blue transition-colors"
          >
            Clientes
          </a>

          {/* BOTÓN MODO OSCURO */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-navy"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* COTIZAR PROYECTO */}
          <a
            href="#contacto"
            className="bg-gradient-to-r from-blue to-cyan text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#29B6B0]/30 transition-all hover:-translate-y-0.5"
          >
            Cotizar proyecto
          </a>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">

          <a
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-blue"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-blue"
          >
            Servicios
          </a>

          <a
            href="#proyectos"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-blue"
          >
            Proyectos
          </a>

          <a
            href="#clientes"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-blue"
          >
            Clientes
          </a>

          <a
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="bg-gradient-to-r from-blue to-cyan text-white px-6 py-2 rounded-full text-center"
          >
            Cotizar proyecto
          </a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
