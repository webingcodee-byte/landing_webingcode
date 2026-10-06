const projects = [
  {
    id: 1,
    title: "E-Commerce ModaPlus",
    category: "Página Web",
    description: "Tienda en línea completa con carrito, pasarela de pagos y panel administrativo.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "Stripe"]
  },
  {
    id: 2,
    title: "App Gestión Inventarios",
    category: "Sistema de Gestión",
    description: "Sistema interno para control de stock en tiempo real con alertas automatizadas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["Vue", "Firebase", "Tailwind"]
  },
  {
    id: 3,
    title: "Portal Corp TechSolve",
    category: "Página Web",
    description: "Landing page corporativa moderna con blog integrado y optimización SEO.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "CMS"]
  },
  {
    id: 4,
    title: "App Delivery RápidoYa",
    category: "Aplicación Web",
    description: "Progressive Web App para pedir comida a domicilio con tracking en vivo.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Maps API", "WebSockets"]
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-cyan font-semibold uppercase tracking-wider text-sm mb-3">Portafolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">Proyectos destacados</h3>
            <p className="text-gray-text text-lg">
              Explora algunos de nuestros trabajos más recientes y descubre cómo ayudamos a otras empresas a transformar su presencia digital.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue font-medium hover:text-cyan transition-colors">
            Ver todos los proyectos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer">
              {/* Image container */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B33]/90 via-[#1B2A4A]/60 to-transparent opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-cyan font-medium mb-2">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-blue font-medium hover:text-cyan transition-colors">
            Ver todos los proyectos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
