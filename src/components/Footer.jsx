import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-1 flex flex-col ">
            {/* LOGO */}
            <a
              href="#hero"
              className="flex items-center gap-x-1 group text-navy"
            >
              <img
                src={logo}
                alt="WebingCode"
                className="w-10 h-10 pl-1 object-contain transition-transform group-hover:scale-105"
              />

              <span className="text-2xl font-bold">
                Webing<span className="text-cyan">Code</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformamos ideas en soluciones digitales. Agencia de desarrollo de software, páginas web y sistemas a medida.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-cyan transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-cyan transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-cyan transition-colors">Proyectos</a></li>
              <li><a href="#clientes" className="hover:text-cyan transition-colors">Clientes</a></li>
              <li><a href="#contacto" className="hover:text-cyan transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Sistemas de Gestión</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Software a Medida</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Consultoría IT</a></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

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
