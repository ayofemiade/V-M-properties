import { useState, useEffect } from 'react';
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
import Contact from './pages/Contact';

type Page = 'home' | 'our-story' | 'services' | 'projects' | 'contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Initialize state from URL hash if present, otherwise default to home
  const [page, setPage] = useState<Page>(() => {
    const hash = window.location.hash.replace('#', '') as Page;
    const validPages: Page[] = ['home', 'our-story', 'services', 'projects', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const closeMenu = () => setMenuOpen(false);

  const goTo = (p: Page, anchor?: string) => {
    const isNewPage = page !== p;
    setPage(p);
    closeMenu();

    // Update URL hash to persist state across reloads
    if (p === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = p;
    }

    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Use instant scroll for page changes to avoid jarring 'fly-over' animations
      window.scrollTo({ top: 0, behavior: isNewPage ? 'auto' : 'smooth' });
    }
  };

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'our-story', 'services', 'projects', 'contact'];
      const targetPage = validPages.includes(hash) ? hash : 'home';
      
      if (targetPage !== page) {
        setPage(targetPage);
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [page]);

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

  if (page === 'contact') {
    return (
      <ReactLenis root>
        <Contact onBack={() => goTo('home')} />
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
            <button className="nav-link nav-link-btn" onClick={() => goTo('contact')}>Contact</button>
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
              onClick={() => goTo('contact')}
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
          <HeroSection onNavigate={goTo} />
          <BrandStory onNavigate={goTo} />
          <ServicesSection onNavigate={goTo} />
          <FeaturedProperties onNavigate={goTo} />
          <WhyChooseUs />
          <BeforeAfterSection />
          <TestimonialSection />
          <CTASection onNavigate={goTo} />
        </main>


        <Footer onNavigate={goTo} />
      </div>
    </ReactLenis>
  );
}

export default App;
