import { ReactLenis } from '@studio-freight/react-lenis';
import './index.css';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import BrandStory from './components/BrandStory';
import TrustStats from './components/TrustStats';
import ServicesSection from './components/ServicesSection';
import LifestyleParallax from './components/LifestyleParallax';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root>
      <div className="app-container">
        <header className="header">
          <div className="logo">V&M</div>
          <nav className="nav">
            <a href="#properties">Properties</a>
            <a href="#story">Our Story</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <HeroSection />
          <BrandStory />
          <ServicesSection />
          <FeaturedProperties />
          <LifestyleParallax />
          <TrustStats />
          <CTASection />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
