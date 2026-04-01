import { ReactLenis } from '@studio-freight/react-lenis';
import './index.css';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import BrandStory from './components/BrandStory';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root>
      <div className="app-container">
        <header className="header">
          <a href="#" className="logo-img-link">
            <img src="/logo.png" alt="V&M Properties" className="nav-logo-img" />
          </a>
          <nav className="nav">
            <a href="#properties" className="nav-link">Properties</a>
            <a href="#story" className="nav-link">Our Story</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </header>

        <main>
          <HeroSection />
          <BrandStory />
          <ServicesSection />
          <FeaturedProperties />
          <BeforeAfterSection />
          <TestimonialSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
