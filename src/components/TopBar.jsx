import { FaWhatsapp, FaFacebookF, FaPhone } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-navy-950 text-white/80 text-sm py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Teléfono */}
        <a
          href="tel:+525544719045"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaPhone className="text-xs" />
          <span className="hidden sm:inline">+52 55 4471 9045</span>
          <span className="sm:hidden">Llamar</span>
        </a>

        {/* Redes sociales */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/525544719045"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-base" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094731752828&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-sm" />
            <span className="hidden md:inline">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}
