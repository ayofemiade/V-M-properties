import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <ReactLenis root>
      <div className="app-container">
        <header className="header">
          <a href="#" className="logo-img-link">
            <img src="/logo.png" alt="V&M Properties" className="nav-logo-img" />
          </a>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            <a href="#properties" className="nav-link">Properties</a>
            <a href="#story" className="nav-link">Our Story</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Hamburger Button — mobile only */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-menu ${menuOpen ? 'visible' : ''}`}>
          <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
            <span></span>
            <span></span>
          </button>

          <div className="mobile-menu-brand">V&M</div>

          <nav className="mobile-nav">
            {['Properties', 'Our Story', 'Contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="mobile-nav-link"
                onClick={closeMenu}
                style={{ transitionDelay: menuOpen ? `${i * 0.08 + 0.1}s` : '0s' }}
              >
                <span className="mobile-nav-num">0{i + 1}</span>
                {item}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <p>V&M Properties © 2025</p>
          </div>
        </div>

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
