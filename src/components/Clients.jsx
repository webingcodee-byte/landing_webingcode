import client1 from '../assets/clients/client1.jpg';
// Para agregar más fotos de clientes en el futuro puedes importarlas aquí:
// import client2 from '../assets/clients/client2.jpg';

// EDITA AQUÍ LA EMPRESA QUE CONFÍA EN TI:
// Puedes cambiar el nombre o añadir más empresas a esta lista cuando lo requieras.
const trustedCompanies = [
  {
    id: 1,
    name: "Empresa Aliada", // Nombre de la empresa cliente
  }
];

// EDITA AQUÍ EL TESTIMONIO DE TU CLIENTE:
// Modifica los datos con la información y opinión real de tu cliente.
// Para añadir más testimonios en el futuro, solo agrega otro objeto a este arreglo.
const testimonials = [
  {
    id: 1,
    name: "Carlos Méndez", // Nombre del cliente
    role: "CEO", // Cargo o posición
    company: "ModaPlus", // Empresa del cliente
    image: client1, // Foto de tu cliente en '../assets/clients/'
    quote: "WebingCode transformó completamente nuestra presencia digital. El nuevo e-commerce aumentó nuestras ventas en un 45% en los primeros tres meses. Profesionales y altamente recomendables." // Testimonio / reseña
  }
];

const Clients = () => {
  return (
    <section id="clientes" className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Logos Section */}
        <div className="mb-24">
          <p className="text-center text-gray-text font-medium mb-10">Empresas que confían en nuestro trabajo</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {trustedCompanies.map((company) => (
              <div key={company.id} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card shadow-xs border border-gray-100 dark:border-white/5 hover:border-cyan/30 transition-all duration-300 cursor-pointer">
                <svg className="w-8 h-8 text-cyan" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-xl font-bold font-heading text-navy">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-cyan font-semibold uppercase tracking-wider text-sm mb-3">Testimonios</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">Lo que dicen nuestros clientes</h3>
          </div>

          <div className={`grid gap-8 ${testimonials.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-3'}`}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-8 text-bg-section">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-text">{testimonial.role} en <span className="text-blue font-medium">{testimonial.company}</span></p>
                  </div>
                </div>
                
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-text italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
