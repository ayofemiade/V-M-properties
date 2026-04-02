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
import Services from './pages/Services';
import Projects from './pages/Projects';

type Page = 'home' | 'our-story' | 'services' | 'projects';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState<Page>('home');

  const closeMenu = () => setMenuOpen(false);

  const goTo = (p: Page, anchor?: string) => {
    setPage(p);
    closeMenu();

    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (page === 'our-story') {
    return (
      <ReactLenis root>
        <OurStory onBack={() => goTo('home')} />
      </ReactLenis>
    );
  }

  if (page === 'services') {
    return (
      <ReactLenis root>
        <Services onBack={() => goTo('home')} />
      </ReactLenis>
    );
  }

  if (page === 'projects') {
    return (
      <ReactLenis root>
        <Projects onBack={() => goTo('home')} />
      </ReactLenis>
    );
  }


  return (
    <ReactLenis root>
      <div className="app-container">
        <header className="header">
          <button className="logo-img-link-btn" onClick={() => goTo('home')}>
            <img src="/logo.png" alt="V&M Properties" className="nav-logo-img" />
          </button>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            <button className="nav-link nav-link-btn" onClick={() => goTo('our-story')}>Our Story</button>
            <button className="nav-link nav-link-btn" onClick={() => goTo('services')}>Services</button>
            <button className="nav-link nav-link-btn" onClick={() => goTo('projects')}>Projects</button>
            <button className="nav-link nav-link-btn" onClick={() => goTo('home', '#contact')}>Contact</button>
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
              className="mobile-nav-link-btn"
              onClick={() => goTo('our-story')}
              style={{ transitionDelay: menuOpen ? '0.1s' : '0s' }}
            >
              <span className="mobile-nav-num">01</span>
              Our Story
            </button>

            <button
              className="mobile-nav-link-btn"
              onClick={() => goTo('services')}
              style={{ transitionDelay: menuOpen ? '0.18s' : '0s' }}
            >
              <span className="mobile-nav-num">02</span>
              Services
            </button>

            <button
              className="mobile-nav-link-btn"
              onClick={() => goTo('projects')}
              style={{ transitionDelay: menuOpen ? '0.26s' : '0s' }}
            >
              <span className="mobile-nav-num">03</span>
              Projects
            </button>

            <button
              className="mobile-nav-link-btn"
              onClick={() => goTo('home', '#contact')}
              style={{ transitionDelay: menuOpen ? '0.34s' : '0s' }}
            >
              <span className="mobile-nav-num">04</span>
              Contact
            </button>

          </nav>

          <div className="mobile-menu-footer">
            <p>V&M Properties © 2026</p>
          </div>
        </div>

        <main>
          <HeroSection />
          <BrandStory onNavigate={goTo} />
          <ServicesSection onNavigate={goTo} />
          <FeaturedProperties />
          <WhyChooseUs />
          <BeforeAfterSection />
          <TestimonialSection />
          <CTASection />
        </main>

        <Footer onNavigate={goTo} />
      </div>
    </ReactLenis>
  );
}

export default App;
