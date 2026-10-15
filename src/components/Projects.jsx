import project1 from '../assets/projects/project1.jpg';
// Para agregar más fotos en el futuro puedes importarlas aquí:
// import project2 from '../assets/projects/project2.jpg';

// EDITA AQUÍ TU PROYECTO:
// Modifica los datos a continuación con la información real de tu proyecto.
// Para agregar más proyectos en el futuro, simplemente añade otro objeto a este arreglo.
const projects = [
  {
    id: 1,
    title: "E-Commerce ModaPlus", // Título de tu proyecto
    category: "Página Web", // Categoría (ej: Página Web, Aplicación Web, Sistema de Gestión)
    description: "Tienda en línea completa con carrito de compras, pasarela de pagos integrada y panel de administración para control total de ventas.", // Descripción del proyecto
    image: project1, // Cambia esta foto por la de tu proyecto en '../assets/projects/'
    tags: ["React", "Node.js", "Stripe"] // Etiquetas o tecnologías que utilizaste
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-cyan font-semibold uppercase tracking-wider text-sm mb-3">Portafolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">Proyecto destacado</h3>
            <p className="text-gray-text text-lg">
              Explora nuestro trabajo más reciente y descubre cómo ayudamos a transformar ideas en soluciones digitales reales.
            </p>
          </div>
        </div>

        <div className={`grid gap-8 ${projects.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
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
      </div>
    </section>
  );
};

export default Projects;
