import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ nombre: '', email: '', telefono: '', empresa: '', servicio: '', mensaje: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0F1B33] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue/20 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan/20 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Info Column */}
          <div>
            <h2 className="text-cyan font-semibold uppercase tracking-wider text-sm mb-3">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Hablemos de tu próximo proyecto</h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              ¿Tienes una idea en mente? Nuestro equipo de expertos está listo para ayudarte a convertirla en realidad. Contáctanos y descubre lo que podemos construir juntos.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-cyan">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:webingcodee@gmail.com" className="text-gray-400 hover:text-cyan transition-colors">webingcodee@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-cyan">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-cyan transition-colors">+51 923 991 050</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-cyan">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Ubicación</h4>
                  <p className="text-gray-400">Ciudad de Lima, Perú</p>
                </div>
              </div>
            </div>

            {/* Socials placeholder */}
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current" style={{ maskImage: 'url(https://unpkg.com/lucide-static@0.321.0/icons/link.svg)', maskSize: 'contain' }}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-[fade-in_0.5s_ease-out]">
                <div className="w-20 h-20 bg-cyan/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h4>
                <p className="text-gray-400">Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-300">Nombre completo *</label>
                    <input type="text" id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo electrónico *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors" placeholder="juan@empresa.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium text-gray-300">Teléfono *</label>
                    <input type="tel" id="telefono" name="telefono" required value={formData.telefono} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors" placeholder="+51 999 999 999" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-sm font-medium text-gray-300">Empresa</label>
                    <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors" placeholder="Tu empresa S.A." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-sm font-medium text-gray-300">Servicio de interés</label>
                  <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors appearance-none" style={{ backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%239ca3af\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")', backgroundPosition: 'right .5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
                    <option value="" className="text-gray-900">Selecciona una opción</option>
                    <option value="Página Web" className="text-gray-900">Página Web</option>
                    <option value="Aplicación Web" className="text-gray-900">Aplicación Web</option>
                    <option value="Sistema de Gestión" className="text-gray-900">Sistema de Gestión</option>
                    <option value="Software a Medida" className="text-gray-900">Software a Medida</option>
                    <option value="Otro" className="text-gray-900">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-gray-300">Mensaje *</label>
                  <textarea id="mensaje" name="mensaje" required value={formData.mensaje} onChange={handleChange} rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue to-cyan text-white font-medium py-4 rounded-xl hover:shadow-lg hover:shadow-cyan/30 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
