import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import WaveDivider from './components/WaveDivider';
import HeroSlider from './components/HeroSlider';
import ServiciosSection from './components/ServiciosSection';
import PrincipiosSection from './components/PrincipiosSection';
import AtencionSection from './components/AtencionSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <TopBar /> */}
      <Navbar />

      {/* Wave: header → hero */}
      <div className="-mb-8 relative z-10">
        <WaveDivider fillColor="#044FA8" isDouble={true} />
      </div>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Servicios */}
      <ServiciosSection />

      {/* Wave: servicios → principios */}
      <div className="bg-surface-50 -mb-1 -mt-1 relative z-10">
        <WaveDivider fillColor="#ffffff" />
      </div>

      {/* Principios */}
      <PrincipiosSection />

      {/* Wave: principios → atención */}
      <div className="bg-white -mb-1 -mt-1 relative z-10">
        <WaveDivider fillColor="#f8fafc" />
      </div>

      {/* Atención a Beneficiarios */}
      <AtencionSection />

      {/* Wave: atención → mapa */}
      <div className="bg-surface-50 -mb-1 -mt-1 relative z-10">
        <WaveDivider fillColor="#ffffff" />
      </div>

      {/* Mapa */}
      <MapSection />

      {/* Wave: mapa → footer */}
      <div className="bg-white -mb-4 -mt-1 relative z-10">
        <WaveDivider fillColor="#020a1a" className="translate-y-px" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
