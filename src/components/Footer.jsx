import { FaPhone } from 'react-icons/fa';
import logoWhite from '../assets/Colega-240-×-240-px-1.png';
import SocialLinks from '../shared/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-navy-1000 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo y nombre */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={logoWhite}
              alt="Grupo Colega"
              className="w-20 h-20 object-contain opacity-80"
            />
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-lg">Grupo Colega</h3>
              <p className="text-white/50 text-sm mt-1">Seguridad Privada</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm text-white/60">
            <a
              href="tel:+525544719045"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaPhone className="text-xs" />
              +52 55 4471 9045
            </a>
            <SocialLinks size="md" />
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Grupo Colega. Todos los derechos reservados.
      </div>
    </footer>
  );
}
