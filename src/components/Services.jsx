const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
    ),
    title: "Páginas Web",
    description: "Diseños modernos, responsivos y optimizados para SEO que capturan la atención de tus clientes."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
    ),
    title: "Aplicaciones Web",
    description: "Plataformas interactivas y escalables utilizando las últimas tecnologías frontend y backend."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-light-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
    ),
    title: "Sistemas de Gestión",
    description: "Software empresarial para administrar procesos, recursos humanos, inventarios y finanzas."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#1B2A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    ),
    title: "Software a Medida",
    description: "Soluciones personalizadas y creadas desde cero para satisfacer las necesidades únicas de tu negocio."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-bg-section relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan font-semibold uppercase tracking-wider text-sm mb-3">Lo que hacemos mejor</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">Servicios integrales para tu crecimiento digital</h3>
          <p className="text-gray-text text-lg">
            Combinamos diseño estético con código robusto para entregar productos digitales que superan expectativas y generan resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue to-cyan transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center mb-6 group-hover:bg-cyan/10 transition-colors">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-navy mb-3">{service.title}</h4>
              <p className="text-gray-text leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
