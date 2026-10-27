import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import SocialLinks from './SocialLinks';

const easeOutExpo = [0.16, 1, 0.3, 1];

const footerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const footerColVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: '-20px' }}
          variants={footerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >

          {/* Brand Col */}
          <motion.div variants={footerColVariants} className="lg:col-span-1 flex flex-col">
            {/* LOGO */}
            <a
              href="#hero"
              className="flex items-center gap-3 group text-white mb-4"
            >
              <img
                src={logo}
                alt="WebingCode Logo"
                className="w-10 h-10 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              />

              <span className="text-2xl font-bold tracking-tight">
                Webing<span className="text-cyan">Code</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformamos ideas en soluciones digitales. Agencia de desarrollo de software, páginas web y sistemas a medida.
            </p>

            <SocialLinks className="flex gap-3" />
          </motion.div>

          {/* Links Col */}
          <motion.div variants={footerColVariants}>
            <h4 className="font-bold text-lg mb-6 text-white">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-cyan transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-cyan transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-cyan transition-colors">Proyectos</a></li>
              <li><a href="#clientes" className="hover:text-cyan transition-colors">Clientes</a></li>
              <li><a href="#contacto" className="hover:text-cyan transition-colors">Contacto</a></li>
            </ul>
          </motion.div>

          {/* Services Col */}
          <motion.div variants={footerColVariants}>
            <h4 className="font-bold text-lg mb-6 text-white">Servicios</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#servicios" className="hover:text-cyan transition-colors">Desarrollo Web</a></li>
              <li><a href="#servicios" className="hover:text-cyan transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#servicios" className="hover:text-cyan transition-colors">Sistemas de Gestión</a></li>
              <li><a href="#servicios" className="hover:text-cyan transition-colors">Software a Medida</a></li>
              <li><a href="#servicios" className="hover:text-cyan transition-colors">Consultoría IT</a></li>
            </ul>
          </motion.div>

          {/* Legal Col */}
          <motion.div variants={footerColVariants}>
            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Política de Cookies</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} WebingCode. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Hecho con <span className="text-red-500">♥</span> por el equipo de WebingCode
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
