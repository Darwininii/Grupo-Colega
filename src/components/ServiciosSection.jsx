import { motion } from 'framer-motion';
import { HiShieldCheck, HiStar, HiUserGroup, HiTruck, HiVideoCamera, HiDesktopComputer } from 'react-icons/hi';
import { HiScale, HiClipboardDocumentCheck } from 'react-icons/hi2';

import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import imgCCTV from '../assets/milosz-klinowski-BW0d0IllW8E-unsplash-scaled.jpg';
import { FaHandshakeAngle } from 'react-icons/fa6';

const services = [
  {
    icon: HiShieldCheck,
    title: 'Guardia Intramuros',
    desc: 'Seguridad física dentro de instalaciones residenciales e industriales.',
    color: 'from-brand-600 to-brand-700',
    bgClass: 'bg-brand-600/80',
    image: img3,
  },
  {
    icon: HiStar,
    title: 'Guardia Premium',
    desc: 'Personal de élite para protección ejecutiva y eventos especiales.',
    color: 'from-navy-700 to-navy-800',
    bgClass: 'bg-navy-700/80',
    image: img4,
  },
  {
    icon: HiUserGroup,
    title: 'Guardia Recepcionista',
    desc: 'Control de acceso con trato profesional y cordial.',
    color: 'from-accent-600 to-accent-700',
    bgClass: 'bg-accent-600/80',
    image: img5,
  },
  {
    icon: HiTruck,
    title: 'Custodia de Valores',
    desc: 'Traslado y protección de bienes con máxima discreción.',
    color: 'from-brand-500 to-brand-700',
    bgClass: 'bg-brand-500/80',
    image: img7,
  },
  {
    icon: HiVideoCamera,
    title: 'Seguridad Electrónica',
    desc: 'Sistemas de vigilancia, alarmas y tecnología de punta.',
    color: 'from-navy-800 to-navy-950',
    bgClass: 'bg-navy-800/80',
    image: imgCCTV,
  },
  {
    icon: HiDesktopComputer,
    title: 'Monitoreo CCTV',
    desc: 'Vigilancia remota 24/7 desde nuestra central de monitoreo.',
    color: 'from-brand-700 to-navy-700',
    bgClass: 'bg-brand-700/80',
    image: img8,
  },
];

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

        {/* Contenedor de servicios */}
        {/* En móvil: Bloques sólidos con imagen de fondo, sin separación, diseño plano */}
        <div className="-mx-4 md:mx-0 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 relative mt-6 md:mt-0">
          {services.map((svc, i) => {
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-10%' }}
                /* Flat, solid color blocks with background images. */
                className={`group overflow-hidden w-full
                  p-6 sm:p-8
                  min-h-[180px] md:h-72
                  sticky md:relative top-0 md:top-auto
                  rounded-none md:rounded-2xl border-b border-white/10 md:border-transparent
                  flex flex-col items-center justify-center text-center shadow-lg
                `}
                style={{
                  top: `calc(90px + ${i * 0}px)`,
                  zIndex: i + 1,
                }}
              >
                {/* Imagen de fondo restaurada */}
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />

                {/* Overlay sólido con opacidad reducida para apreciar mejor las imágenes */}
                <div
                  className={`absolute inset-0 ${svc.bgClass} opacity-80 md:opacity-75 md:group-hover:opacity-85 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <svc.icon className="text-white text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-bold text-lg md:text-xl tracking-wide leading-tight px-2">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-white/90 font-medium text-sm leading-relaxed max-w-sm">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bloques extra: Consultoría y Asesoría */}
        {/* Diseño plano y minimalista con separación aumentada en desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="-mx-4 md:mx-0 mt-0 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-0 border-b md:border-b-0 border-white/10"
        >
          {/* Tarjeta 1: Consultoría - Fondo gris claro */}
          <div className="bg-white text-navy-950 flex flex-col items-center justify-center text-center p-8 sm:p-12 min-h-[180px] md:h-auto">
            <FaHandshakeAngle className="text-5xl text-navy-950 mb-3" />
            <h3 className="font-semibold text-[15px] md:text-lg tracking-wide max-w-sm">
              Consultoría en seguridad y análisis de riesgos.
            </h3>
          </div>

          {/* Tarjeta 2: Asesoría - Fondo blanco */}
          <div className="bg-white text-navy-950 flex flex-col items-center justify-center text-center p-8 sm:p-12 min-h-[180px] md:h-auto">
            <HiScale className="text-5xl text-[#7a3b8c] mb-3" />
            <h3 className="font-semibold text-[15px] md:text-lg tracking-wide max-w-sm">
              Asesoría jurídica laboral.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
