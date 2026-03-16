import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import slide1 from '../assets/pexels-israel-torres-16027867-scaled.jpg';
import slide2 from '../assets/pexels-victor-armas-13654047-scaled.jpg';
import slide3 from '../assets/pexels-victor-armas-13664994-scaled.jpg';

const slides = [
  {
    image: slide1,
    title: 'SOMOS UNA ORGANIZACIÓN',
    subtitle: 'ESPECIALIZADA EN SEGURIDAD PRIVADA',
    desc: 'Protegemos lo que más importa con profesionalismo y tecnología de vanguardia.',
  },
  {
    image: slide2,
    title: 'VIGILANCIA',
    subtitle: 'LAS 24 HORAS DEL DÍA',
    desc: 'Monitoreo constante y guardias capacitados para garantizar tu tranquilidad.',
  },
  {
    image: slide3,
    title: 'PRESENCIA EN TODA',
    subtitle: 'LA CIUDAD DE MÉXICO',
    desc: 'Cobertura integral en la zona metropolitana y áreas estratégicas.',
  },
];

export default function HeroSlider() {
  return (
    <section id="inicio" className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-900/50 to-transparent" />

              {/* Texto */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center max-w-3xl"
                >
                  <h2 className="text-white font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight drop-shadow-lg">
                    {slide.title}
                    <br />
                    <span className="text-brand-300">{slide.subtitle}</span>
                  </h2>
                  <p className="mt-4 md:mt-6 text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    {slide.desc}
                  </p>
                  <a
                    href="#servicios"
                    className="mt-6 md:mt-8 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-brand-500/30 transition-all duration-300 hover:scale-105"
                  >
                    Conoce nuestros servicios
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
