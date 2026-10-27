import { useState } from 'react';
import { motion } from 'framer-motion';

import project1 from '../assets/projects/project1.jpg';
import project1_1 from '../assets/projects/project1.1.png';
import project1_2 from '../assets/projects/project1.2.png';
import project1_3 from '../assets/projects/project1.3.png';


const easeOutExpo = [0.16, 1, 0.3, 1];

const headerVariants = {
  hidden: { opacity: 0, x: -35, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 35, scale: 0.96, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

const projects = [
  {
    id: 1,
    title: "Sistema JudeFilms - Control de Eventos",
    category: "Sistema de Gestión",
    description: "Plataforma empresarial a medida para la administración de clientes, programación en calendario interactivo de eventos y dashboard financiero con control de ingresos y pagos.",
    images: [
      {
        src: project1,
        title: "Mis Clientes",
        caption: "Gestión de clientes, adelantos y tipos de eventos"
      },
      {
        src: project1_1,
        title: "Registo de Clientes",
        caption: "Registro de clientes, programación de eventos, control de pagos y contratos digitales"
      },
      {
        src: project1_2,
        title: "Calendario de Eventos",
        caption: "Organización y control de fechas por tipos de eventos"
      },
      {
        src: project1_3,
        title: "Dashboard de Ingresos",
        caption: "Métricas anuales, proyección mensual y pendientes de cobro"
      }
    ],
    tags: ["Finanzas", "Dashboard", "Gestión Empresarial"]
  }
];

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = (project.images && project.images.length > 0)
    ? project.images.map((img) => (typeof img === 'string' ? { src: img, title: '', caption: '' } : img))
    : (project.image ? [{ src: project.image, title: '', caption: '' }] : []);

  const total = images.length;
  const currentImage = images[currentIndex] || { src: '', title: '', caption: '' };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-card border border-gray-100 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-cyan/40 transition-all duration-300 flex flex-col">
      {/* Screen / Carousel Container */}
      <div className="relative aspect-[21/10] w-full overflow-hidden bg-[#070B14] select-none border-b border-gray-100 dark:border-white/10">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`${project.title} - Foto ${idx + 1}`}
            loading="eager"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          />
        ))}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 md:p-3 rounded-full bg-navy-dark/80 hover:bg-cyan text-white hover:text-navy-dark border border-white/20 hover:border-cyan shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 group/arrow focus:outline-none focus:ring-2 focus:ring-cyan cursor-pointer"
            >
              <svg className="w-5 h-5 transition-transform duration-200 group-hover/arrow:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Foto siguiente"
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 md:p-3 rounded-full bg-navy-dark/80 hover:bg-cyan text-white hover:text-navy-dark border border-white/20 hover:border-cyan shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 group/arrow focus:outline-none focus:ring-2 focus:ring-cyan cursor-pointer"
            >
              <svg className="w-5 h-5 transition-transform duration-200 group-hover/arrow:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-dark/80 backdrop-blur-md border border-white/10 shadow-lg">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Ir a foto ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                    idx === currentIndex
                      ? 'w-6 h-2 bg-cyan shadow-[0_0_10px_rgba(41,182,176,0.8)]'
                      : 'w-2 h-2 bg-white/40 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Details Container */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-cyan/15 text-cyan border border-cyan/30 text-xs font-semibold tracking-wide uppercase">
              {project.category}
            </span>
            {currentImage.caption && (
              <span className="text-xs text-gray-text font-medium">
                {currentImage.caption}
              </span>
            )}
          </div>

          <h4 className="text-2xl font-bold font-heading text-navy mb-3">{project.title}</h4>

          <p className="text-gray-text mb-6 text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-bg-section text-navy text-xs font-medium rounded-full border border-gray-200/50 dark:border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background subtle light effects matching Hero and Services */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan/10 via-blue/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-blue/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: '-20px' }}
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-cyan/10 text-cyan font-semibold text-xs tracking-wider uppercase mb-3 border border-cyan/20">
              Portafolio
            </span>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">Proyectos destacados</h3>
            <p className="text-gray-text text-lg">
              Explora nuestros trabajos más recientes y descubre cómo ayudamos a transformar ideas en soluciones digitales reales.
            </p>
          </div>
        </motion.div>

        <div className={`grid gap-8 ${projects.length === 1 ? 'max-w-4xl mx-auto' : 'md:grid-cols-2'}`}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1, margin: '-20px' }}
              variants={cardReveal}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
