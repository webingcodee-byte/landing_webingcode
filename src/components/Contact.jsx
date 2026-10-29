import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const easeOutExpo = [0.16, 1, 0.3, 1];

const leftColVariants = {
  hidden: { opacity: 0, x: -35, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: easeOutExpo,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const rightColVariants = {
  hidden: { opacity: 0, x: 35, scale: 0.96, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
      delay: 0.1,
    },
  },
};

const contactItemVariant = {
  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: easeOutExpo },
  },
};

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
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Lee del .env y usa las credenciales como respaldo por si el servidor Vite no se ha reiniciado
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_t9zccfk';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wsgjv2c';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'dAgugy58UpGfzfM1V';

    // Validación preventiva
    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        'Faltan configurar las credenciales en el archivo .env (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY).'
      );
      setIsSubmitting(false);
      return;
    }

    // Parámetros preparados tanto con nombres en español como en inglés para adaptarse a tu plantilla de EmailJS
    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      empresa: formData.empresa || 'No especificada',
      servicio: formData.servicio || 'No especificado',
      mensaje: formData.mensaje,
      // Alias comunes en plantillas EmailJS:
      from_name: formData.nombre,
      user_name: formData.nombre,
      user_email: formData.email,
      user_phone: formData.telefono,
      user_company: formData.empresa || 'No especificada',
      user_service: formData.servicio || 'No especificado',
      reply_to: formData.email,
      message: formData.mensaje
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        servicio: '',
        mensaje: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    } catch (error) {
      console.error('Error al enviar el formulario con EmailJS:', error);
      setErrorMessage(
        error?.text || 'Ocurrió un error al enviar tu mensaje. Por favor intenta nuevamente o contáctanos por teléfono.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-[#0F1B33] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-blue/25 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-cyan/25 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Contact Info Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15, margin: '-20px' }}
            variants={leftColVariants}
          >
            <motion.span
              variants={contactItemVariant}
              className="inline-block py-1 px-3 rounded-full bg-cyan/15 text-cyan font-semibold uppercase tracking-wider text-xs mb-4 border border-cyan/30"
            >
              Contacto
            </motion.span>
            <motion.h2
              variants={contactItemVariant}
              className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight"
            >
              Hablemos de tu <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">próximo proyecto</span>
            </motion.h2>
            <motion.p
              variants={contactItemVariant}
              className="text-gray-300 text-lg mb-10 leading-relaxed"
            >
              ¿Tienes una idea en mente? Nuestro equipo de expertos está listo para ayudarte a convertirla en realidad. Contáctanos y descubre lo que podemos construir juntos.
            </motion.p>

            <div className="space-y-6">
              <motion.div
                variants={contactItemVariant}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-cyan/20 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-cyan/40 text-cyan transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5">Email</h4>
                  <a href="mailto:webingcodee@gmail.com" className="text-gray-400 group-hover:text-cyan transition-colors">webingcodee@gmail.com</a>
                </div>
              </motion.div>

              <motion.div
                variants={contactItemVariant}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-cyan/20 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-cyan/40 text-cyan transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5">Teléfono</h4>
                  <a href="tel:+51923991050" className="text-gray-400 group-hover:text-cyan transition-colors">+51 923 991 050</a>
                </div>
              </motion.div>

              <motion.div
                variants={contactItemVariant}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-cyan/20 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-cyan/40 text-cyan transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5">Ubicación</h4>
                  <p className="text-gray-400 group-hover:text-cyan transition-colors">Ciudad de Lima, Perú</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15, margin: '-20px' }}
            variants={rightColVariants}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-2xl pointer-events-none"></div>

            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-cyan/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(41,182,176,0.4)] animate-bounce">
                  <svg className="w-10 h-10 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-2xl font-bold mb-2">¡Mensaje enviado con éxito!</h4>
                <p className="text-gray-400 mb-6 max-w-sm">Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá a la brevedad.</p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-xl border border-cyan/40 text-cyan hover:bg-cyan/10 transition-colors text-sm font-medium cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1 leading-relaxed">
                      {errorMessage}
                    </div>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-300">Nombre completo *</label>
                    <input type="text" id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo electrónico *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all" placeholder="juan@empresa.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium text-gray-300">Teléfono *</label>
                    <input type="tel" id="telefono" name="telefono" required value={formData.telefono} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all" placeholder="+51 999 999 999" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-sm font-medium text-gray-300">Empresa</label>
                    <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all" placeholder="Tu empresa S.A." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-sm font-medium text-gray-300">Servicio de interés</label>
                  <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all appearance-none" style={{ backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%239ca3af\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")', backgroundPosition: 'right .75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
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
                  <textarea id="mensaje" name="mensaje" required value={formData.mensaje} onChange={handleChange} rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                </div>

                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue to-cyan text-white font-medium py-4 rounded-xl hover:shadow-xl hover:shadow-cyan/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
