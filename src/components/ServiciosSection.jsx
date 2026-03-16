import { motion } from 'framer-motion';
import { HiShieldCheck, HiStar, HiUserGroup, HiTruck, HiVideoCamera, HiDesktopComputer } from 'react-icons/hi';
import { HiScale, HiClipboardDocumentCheck } from 'react-icons/hi2';

import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import imgCCTV from '../assets/milosz-klinowski-BW0d0IllW8E-unsplash-scaled.jpg';

const services = [
  {
    icon: HiShieldCheck,
    title: 'Guardia Intramuros',
    desc: 'Seguridad física dentro de instalaciones residenciales e industriales.',
    color: 'from-brand-600 to-brand-700',
    image: img3,
  },
  {
    icon: HiStar,
    title: 'Guardia Premium',
    desc: 'Personal de élite para protección ejecutiva y eventos especiales.',
    color: 'from-navy-700 to-navy-800',
    image: img4,
  },
  {
    icon: HiUserGroup,
    title: 'Guardia Recepcionista',
    desc: 'Control de acceso con trato profesional y cordial.',
    color: 'from-accent-600 to-accent-700',
    image: img5,
  },
  {
    icon: HiTruck,
    title: 'Custodia de Valores',
    desc: 'Traslado y protección de bienes con máxima discreción.',
    color: 'from-brand-500 to-brand-700',
    image: img7,
  },
  {
    icon: HiVideoCamera,
    title: 'Seguridad Electrónica',
    desc: 'Sistemas de vigilancia, alarmas y tecnología de punta.',
    color: 'from-navy-800 to-navy-950',
    image: imgCCTV,
  },
  {
    icon: HiDesktopComputer,
    title: 'Monitoreo CCTV',
    desc: 'Vigilancia remota 24/7 desde nuestra central de monitoreo.',
    color: 'from-brand-700 to-navy-700',
    image: img8,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-widest uppercase">
            Nuestras soluciones
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Somos <span className="text-brand-500">Seguridad</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Ofrecemos servicios integrales de seguridad privada adaptados a las necesidades específicas de cada cliente.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden h-64 md:h-72 cursor-pointer shadow-lg"
            >
              {/* Imagen de fondo */}
              <img
                src={svc.image}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay degradado */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${svc.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
              />

              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <svc.icon className="text-white/90 text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
                  {svc.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bloques extra: Consultoría y Asesoría */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-navy-800 to-navy-950 p-8 md:p-10 text-white group hover:shadow-2xl transition-shadow duration-300">
            <HiClipboardDocumentCheck className="text-5xl text-brand-300 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Consultoría en Seguridad</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Evaluamos riesgos y diseñamos planes integrales para proteger tu empresa, patrimonio y personal.
            </p>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-accent-600 to-accent-700 p-8 md:p-10 text-white group hover:shadow-2xl transition-shadow duration-300">
            <HiScale className="text-5xl text-purple-200 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Asesoría Jurídica</h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Acompañamiento legal especializado en materia de seguridad privada y normativa vigente.
            </p>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
