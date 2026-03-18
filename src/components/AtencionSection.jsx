import { motion } from 'framer-motion';
import { FaFacebookF } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const pasos = [
  { num: 1, titulo: 'Obtener CURP', desc: 'Descarga tu Clave Única de Registro de Población desde el portal oficial.', link: 'https://www.gob.mx/curp/' },
  { num: 2, titulo: 'Obtener RFC', desc: 'Genera tu Registro Federal de Contribuyentes en línea.', link: 'https://www.sat.gob.mx/aplicacion/operacion/31274/consulta-tu-clave-de-rfc-mediante-curp' },
  { num: 3, titulo: 'Acta de Nacimiento', desc: 'Solicita una copia certificada de tu acta de nacimiento.', link: 'https://www.gob.mx/ActaNacimiento/' },
  { num: 4, titulo: 'Comprobante de Domicilio', desc: 'Reúne un comprobante de domicilio reciente (no mayor a 3 meses).', link: "https://www.imss.gob.mx/derechoH/nss" },
  { num: 5, titulo: 'Credencial INE', desc: 'Asegúrate de contar con tu identificación oficial vigente.', link: 'https://www.ine.mx/' },
  { num: 6, titulo: 'Contáctanos por Facebook', desc: 'Escríbenos por Facebook para completar tu proceso de registro.', link: 'https://www.facebook.com/profile.php?id=100094731752828&mibextid=ZbWKwL', isFacebook: true },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function AtencionSection() {
  return (
    <section id="atencion" className="py-16 md:py-24 bg-surface-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-widest uppercase">
            Proceso de registro
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Atención a <span className="text-brand-500">Beneficiarios</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Sigue estos pasos para completar tu registro como beneficiario de Grupo Colega.
          </p>
        </motion.div>

        {/* Lista de pasos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {pasos.map((paso) => (
            <motion.div
              key={paso.num}
              variants={itemVariants}
              className="group bg-white rounded-xl border border-surface-200 p-5 md:p-6 flex items-center gap-4 md:gap-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300"
            >
              {/* Número */}
              <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-linear-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md shadow-brand-500/20">
                <span className="text-white font-bold text-lg md:text-xl">{paso.num}</span>
              </div>

              {/* Texto */}
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-navy-900 text-base md:text-lg">
                  {paso.titulo}
                </h4>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                  {paso.desc}
                </p>
              </div>

              {/* Botón */}
              {paso.link && (
                <a
                  href={paso.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md ${
                    paso.isFacebook
                      ? 'bg-[#1877f2] hover:bg-[#166fe5] text-white shadow-blue-400/20'
                      : 'bg-navy-900 hover:bg-navy-800 text-white shadow-navy-900/20'
                  }`}
                >
                  {paso.isFacebook ? (
                    <>
                      <FaFacebookF />
                      <span className="hidden sm:inline">Facebook</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Ir a</span>
                      <HiArrowRight />
                    </>
                  )}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
