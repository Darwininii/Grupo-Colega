import { motion } from 'framer-motion';
import { HiShieldCheck, HiEye } from 'react-icons/hi';

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-surface-200 p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors">
              <HiShieldCheck className="text-brand-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Brindar servicios de seguridad privada de la más alta calidad, protegiendo
              a nuestros clientes con personal altamente capacitado, tecnología de vanguardia
              y un compromiso inquebrantable con la integridad y la excelencia operativa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-surface-200 p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors">
              <HiEye className="text-accent-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser la empresa líder en seguridad privada en México, reconocida por nuestra
              innovación, profesionalismo y por generar ambientes seguros que permitan a
              nuestros clientes desarrollarse con total confianza y tranquilidad.
            </p>
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
