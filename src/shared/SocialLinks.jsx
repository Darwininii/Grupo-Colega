import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';

/**
 * Lista centralizada de redes sociales.
 * Para agregar una nueva red, solo añade un objeto con:
 *   { name, href, icon, hoverColor }
 */
const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/525544719045',
    icon: <FaWhatsapp />,
    hoverColor: 'hover:bg-green-500/20 hover:text-green-400',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100094731752828&mibextid=ZbWKwL',
    icon: <FaFacebookF />,
    hoverColor: 'hover:bg-blue-500/20 hover:text-blue-400',
  },
  // Agrega más redes aquí, ej:
  // {
  //   name: 'Instagram',
  //   href: 'https://instagram.com/...',
  //   icon: <FaInstagram />,
  //   hoverColor: 'hover:bg-pink-500/20 hover:text-pink-400',
  // },
];

/**
 * Componente reutilizable de redes sociales.
 *
 * Props:
 *  - size       "sm" | "md" | "lg"  (default "md")
 *  - showLabel  boolean             (default false)  muestra el nombre al lado
 *  - className  string              clases extra para el contenedor
 */
export default function SocialLinks({ size = 'md', showLabel = false, className = '' }) {
  const sizeMap = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className={`
            ${sizeMap[size]}
            rounded-full bg-white/10 flex items-center justify-center
            transition-all duration-200
            ${link.hoverColor}
            ${showLabel ? 'gap-1.5 px-3 w-auto' : ''}
          `}
        >
          {link.icon}
          {showLabel && <span className="hidden md:inline">{link.name}</span>}
        </a>
      ))}
    </div>
  );
}


