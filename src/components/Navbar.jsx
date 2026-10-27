import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') return true;
      if (savedTheme === 'light') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-md shadow-sm dark:shadow-[0_4px_25px_-4px_rgba(0,0,0,0.5)] border-b border-gray-200/60 dark:border-white/10 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#hero"
          className="flex items-center gap-3 group text-navy"
        >
          <img
            src={logo}
            alt="WebingCode Logo"
            className="w-11 h-11 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
          />

          <span className="text-2xl font-bold tracking-tight">
            Webing<span className="text-cyan">Code</span>
          </span>
        </a>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600 dark:text-gray-200">

          <a
            href="#hero"
            className="hover:text-blue dark:hover:text-cyan transition-colors"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="hover:text-blue dark:hover:text-cyan transition-colors"
          >
            Servicios
          </a>

          <a
            href="#proyectos"
            className="hover:text-blue dark:hover:text-cyan transition-colors"
          >
            Proyectos
          </a>

          <a
            href="#clientes"
            className="hover:text-blue dark:hover:text-cyan transition-colors"
          >
            Clientes
          </a>

          {/* BOTÓN MODO OSCURO */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-navy cursor-pointer"
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
          className="md:hidden text-navy p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-md shadow-xl border-t border-gray-100 dark:border-white/10 py-5 px-6 flex flex-col gap-4"
          >
            <a
              href="#hero"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue dark:hover:text-cyan font-medium transition-colors"
            >
              Inicio
            </a>

            <a
              href="#servicios"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue dark:hover:text-cyan font-medium transition-colors"
            >
              Servicios
            </a>

            <a
              href="#proyectos"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue dark:hover:text-cyan font-medium transition-colors"
            >
              Proyectos
            </a>

            <a
              href="#clientes"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue dark:hover:text-cyan font-medium transition-colors"
            >
              Clientes
            </a>

            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-blue to-cyan text-white px-6 py-2.5 rounded-full text-center font-medium shadow-md shadow-cyan/20"
            >
              Cotizar proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
