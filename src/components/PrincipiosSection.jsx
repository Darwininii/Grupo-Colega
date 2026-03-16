import { motion } from 'framer-motion';
import { FaEye, FaShieldAlt } from 'react-icons/fa';

const valores = ['Disciplina', 'Equipo', 'Integridad', 'Servicio', 'Respeto'];

export default function PrincipiosSection() {
  return (
    <section id="principios" className="py-16 md:py-24 bg-white overflow-hidden">
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
            Lo que nos define
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Nuestros Principios
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {['Calidad', 'Seguridad', 'Confianza'].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-lg md:text-2xl font-bold text-navy-800"
              >
                {i > 0 && <span className="text-brand-400 mr-3 md:mr-6">·</span>}
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
          {/* Tarjeta Misión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-linear-to-b from-white to-brand-50/10 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-100/50 overflow-hidden"
          >
            {/* Barra de acento superior */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-500 transition-transform duration-500 origin-left" />

            {/* Elemento decorativo de fondo (Watermark) */}
            {/* <FaShieldAlt className="absolute -bottom-6 -right-6 text-9xl text-brand-500/5 -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0" /> */}

            {/* Contenedor de Icono Estilizado */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-brand-400/20 blur-xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500" />
              {/* <div className="relative w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center border border-brand-100 group-hover:border-brand-300 transition-colors">
                <FaShieldAlt className="text-brand-600 text-3xl" />
              </div> */}
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">Misión</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-[17px] font-medium opacity-90">
                Brindar servicios de seguridad privada de la más alta calidad, protegiendo
                a nuestros clientes con personal altamente capacitado, tecnología de vanguardia
                y un compromiso inquebrantable con la integridad y la excelencia operativa.
              </p>
            </div>
          </motion.div>

          {/* Tarjeta Visión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-linear-to-b from-white to-purple-50/10 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/50 overflow-hidden"
          >
            {/* Barra de acento superior */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#7a3b8c] transition-transform duration-500 origin-left" />

            {/* Elemento decorativo de fondo (Watermark) */}
            {/* <FaEye className="absolute -bottom-6 -right-6 text-9xl text-purple-600/5 rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0" /> */}

            {/* Contenedor de Icono Estilizado */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500" />
              {/* <div className="relative w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center border border-purple-100 group-hover:border-purple-300 transition-colors">
                <FaEye className="text-accent-600 text-3xl" />
              </div> */}
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-navy-950 mb-4 tracking-tight">Visión</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-[17px] font-medium opacity-90">
                Ser la empresa líder en seguridad privada en México, reconocida por nuestra
                innovación, profesionalismo y por generar ambientes seguros que permitan a
                nuestros clientes desarrollarse con total confianza y tranquilidad.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Barra de valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-r from-navy-900 via-navy-800 to-navy-900 rounded-2xl py-6 px-6 md:px-10 shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.15),transparent_50%)]" />
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {valores.map((valor, i) => (
              <motion.div
                key={valor}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-brand-400" />
                <span className="text-white font-semibold text-sm md:text-base tracking-wide uppercase">
                  {valor}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
