import { motion } from 'framer-motion';
import client1 from '../assets/clients/client1.jpg';

const easeOutExpo = [0.16, 1, 0.3, 1];

const headerVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

const logoContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const logoItemVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

const trustedCompanies = [
  {
    id: 1,
    name: "Jude Films",
    logo: client1,
    category: "Productora Audiovisual",
  }
];

const Clients = () => {
  return (
    <section id="clientes" className="py-24 bg-bg-section relative overflow-hidden">
      {/* Background subtle light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue/5 via-cyan/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: '-20px' }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan/10 text-cyan font-semibold text-xs tracking-wider uppercase mb-3 border border-cyan/20">
            Confianza y Alianzas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">
            Empresas que confían en nuestro trabajo
          </h2>
          <p className="text-gray-text text-lg">
            Colaboramos estrechamente con marcas y proyectos líderes para construir soluciones digitales de alto impacto.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: '-20px' }}
          variants={logoContainerVariants}
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
        >
          {trustedCompanies.map((company) => (
            <motion.div
              key={company.id}
              variants={logoItemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl bg-card border border-gray-100 dark:border-white/5 shadow-md hover:shadow-2xl hover:border-cyan/40 transition-all duration-300 min-w-[240px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-24 md:h-28 w-auto object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-85 group-hover:opacity-100 transform group-hover:scale-105"
              />
              
              <div className="mt-4 text-center">
                <span className="text-sm font-semibold text-navy group-hover:text-cyan transition-colors">
                  {company.name}
                </span>
                {company.category && (
                  <p className="text-xs text-gray-text mt-0.5">
                    {company.category}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
