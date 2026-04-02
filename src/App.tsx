import { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import './index.css';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import BrandStory from './components/BrandStory';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import OurStory from './pages/OurStory';

type Page = 'home' | 'our-story';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState<Page>('home');

  const closeMenu = () => setMenuOpen(false);
  const goTo = (p: Page) => { setPage(p); closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  if (page === 'our-story') {
    return (
      <ReactLenis root>
        <OurStory onBack={() => goTo('home')} />
      </ReactLenis>
    );
  }

  return (
    <ReactLenis root>
      <div className="app-container">
        <header className="header">
          <a href="#" className="logo-img-link" onClick={() => goTo('home')}>
            <img src="/logo.png" alt="V&M Properties" className="nav-logo-img" />
          </a>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            <button className="nav-link nav-link-btn" onClick={() => goTo('our-story')}>Our Story</button>
            <a href="#services" className="nav-link">Services</a>
            <a href="#projects" className="nav-link">Projects</a>
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
            <button
              className="mobile-nav-link"
              onClick={() => goTo('our-story')}
              style={{ transitionDelay: menuOpen ? '0.1s' : '0s', background: 'none', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer', fontFamily: 'var(--font-body)' }}
            >
              <span className="mobile-nav-num">01</span>
              Our Story
            </button>
            {[['Services', '#services'], ['Projects', '#projects'], ['Contact', '#contact']].map(([item, href], i) => (
              <a
                key={item}
                href={href}
                className="mobile-nav-link"
                onClick={closeMenu}
                style={{ transitionDelay: menuOpen ? `${(i + 1) * 0.08 + 0.1}s` : '0s' }}
              >
                <span className="mobile-nav-num">0{i + 2}</span>
                {item}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <p>V&M Properties © 2026</p>
          </div>
        </div>

        <main>
          <HeroSection />
          <BrandStory />
          <ServicesSection />
          <FeaturedProperties />
          <WhyChooseUs />
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

