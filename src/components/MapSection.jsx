import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-widest uppercase">
            Ubicación
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Encuéntranos
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Estamos ubicados en la Ciudad de México. Visítanos o contáctanos para más información.
          </p>
        </motion.div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl border border-surface-200"
        >
          <iframe
            title="Ubicación Grupo Colega - Ciudad de México"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.383009718122!2d-99.1423318!3d19.395850499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fefce5de3f45%3A0x5feddd3b4d945e13!2zQW5kYWx1Y8OtYSAxOTksIMOBbGFtb3MsIEJlbml0byBKdcOhcmV6LCAwMzQwMCBDaXVkYWQgZGUgTcOpeGljbywgQ0RNWCwgTcOpeGljbw!5e0!3m2!1ses!2sco!4v1773677354430!5m2!1ses!2sco"
            className="w-full h-72 sm:h-80 md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
