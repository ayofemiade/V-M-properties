import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../projects.css';

/* ── Reusable scroll-reveal wrapper ── */
const Reveal = ({
    children,
    delay = 0,
    className = '',
    dir = 'up',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    dir?: 'up' | 'down' | 'left' | 'right';
}) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: dir === 'up' ? 40 : dir === 'down' ? -40 : 0,
            x: dir === 'left' ? 40 : dir === 'right' ? -40 : 0
        },
        visible: { opacity: 1, y: 0, x: 0 }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

const Projects = ({ onBack }: { onBack: () => void }) => {
    const flagshipRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: flagshipRef,
        offset: ["start end", "end start"]
    });

    const flagshipImgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div className="projects-page">
            {/* ── Back nav ── */}
            <button className="story-back-btn" onClick={onBack}>
                <span>←</span> Back to Home
            </button>

            {/* ════════════════════════════════════════
                SECTION 1 — HERO
            ════════════════════════════════════════ */}
            <section className="pj-hero">
                <div className="pj-hero-bg" />
                <div className="pj-hero-overlay" />
                <motion.div
                    className="pj-hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <span className="sv-eyebrow">Our Projects</span>
                    <h1 className="pj-hero-title">Thoughtfully <br />Designed.</h1>
                    <p className="pj-hero-sub">
                        Developments built for lasting value, engineered for durability, <br />
                        and designed for modern living.
                    </p>
                </motion.div>
                <motion.div
                    className="pj-scroll-cue"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.span
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    >↓</motion.span>
                </motion.div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 2 — THE BETACH PLACE (FEATURED)
            ════════════════════════════════════════ */}
            <section className="pj-flagship" ref={flagshipRef} id="betach">
                <div className="pj-flagship-label">
                    <Reveal dir="left">
                        <span className="sv-gold-label">Signature Project</span>
                    </Reveal>
                </div>

                <div className="pj-flagship-grid">
                    <div className="pj-flagship-img-wrap">
                        <motion.img
                            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80"
                            alt="The Betach Place Rendering"
                            style={{ y: flagshipImgY }}
                        />
                    </div>
                    <div className="pj-flagship-text">
                        <Reveal delay={0.2} dir="right">
                            <h2 className="pj-flagship-title">The Betach <br /><span className="muted">Place.</span></h2>
                        </Reveal>
                        <Reveal delay={0.3} dir="right">
                            <p className="pj-flagship-sub">
                                A modern residential community designed for long-term living and investment value. 23 thoughtfully planned units in Winston-Salem, NC.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 3 — PROJECT OVERVIEW
            ════════════════════════════════════════ */}
            <section className="pj-overview">
                <div className="container pj-vision-grid">
                    <div className="pj-vision-eyebrow-col">
                        <Reveal dir="left">
                            <span className="sv-gold-label">The Vision</span>
                            <div className="pj-vision-line" />
                        </Reveal>
                    </div>

                    <div className="pj-vision-content">
                        <Reveal delay={0.2} dir="right">
                            <h2 className="pj-vision-lead">
                                A thoughtfully planned residential community in Winston-Salem, NC, 
                                featuring 23 modern homes designed for young professionals, families, and retirees.
                            </h2>
                        </Reveal>
                        
                        <Reveal delay={0.35} dir="right">
                            <div className="pj-vision-body-wrap">
                                <p className="pj-vision-body">
                                    Every aspect of The Betach Place is designed to balance comfort, durability, and long-term value — 
                                    creating a community that supports modern living through intelligent site planning and high-quality construction.
                                </p>
                                <div className="pj-vision-watermark">VM</div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 4 — KEY FEATURES (GRID)
            ════════════════════════════════════════ */}
            <section className="pj-features">
                <div className="container">
                    <Reveal className="pj-features-header">
                        <span className="sv-gold-label centered">Core Specifications</span>
                    </Reveal>
                    <div className="pj-features-grid">
                        {[
                            { title: "Size", text: "Approx. 1,500 sq ft homes designed for versatility." },
                            { title: "Efficiency", text: "Energy-efficient design reducing long-term costs." },
                            { title: "Quality", text: "Durable, low-maintenance construction materials." },
                            { title: "Layout", text: "Community-focused site layout for natural flow." },
                            { title: "Value", text: "Engineered for long-term appreciation and livability." },
                        ].map((f, i) => (
                            <Reveal key={f.title} delay={i * 0.1}>
                                <div className="pj-feature-card">
                                    <div className="pj-feature-icon">◊</div>
                                    <h3 className="pj-feature-title">{f.title}</h3>
                                    <p className="pj-feature-text">{f.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 5 — LOCATION VISUAL
            ════════════════════════════════════════ */}
            <section className="pj-location">
                <div className="pj-location-bg" />
                <div className="pj-location-content container">
                    <div className="pj-location-card">
                        <Reveal dir="left">
                            <span className="sv-gold-label">Geography</span>
                            <h2 className="pj-location-title">Winston-Salem, NC</h2>
                            <p className="pj-location-desc">
                                A region defined by steady growth, high livability, and increasing demand for modern residential housing. Strategically selected for its long-term investment viability and community appeal.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 6 — PROJECT STATUS & TIMELINE
            ════════════════════════════════════════ */}
            <section className="pj-status">
                <div className="container pj-status-grid">
                    <Reveal dir="left" className="pj-status-item">
                        <span className="sv-gold-label">Current Phase</span>
                        <h3 className="pj-status-val">Pre-development</h3>
                        <p className="pj-status-label">Project In Development</p>
                    </Reveal>
                    <div className="pj-status-divider" />
                    <Reveal dir="right" className="pj-status-item">
                        <span className="sv-gold-label">Launch Timeline</span>
                        <h3 className="pj-status-val">Q4 2025</h3>
                        <p className="pj-status-label">Target Construction Start</p>
                    </Reveal>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 7 — VISUAL SHOWCASE
            ════════════════════════════════════════ */}
            <section className="pj-showcase">
                <div className="container">
                    <div className="pj-showcase-header">
                        <Reveal>
                            <span className="sv-gold-label">Visual Portfolio</span>
                            <h2 className="pj-showcase-title">A Glimpse Into <br /><span className="muted">What We’re Building.</span></h2>
                        </Reveal>
                    </div>

                    <div className="pj-gallery-grid">
                        <Reveal className="pji-1" delay={0.1}>
                            <div className="pji-inner">
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Concept interior" loading="lazy" />
                                <div className="pji-overlay">Architectural Concept · 01</div>
                            </div>
                        </Reveal>
                        <Reveal className="pji-2" delay={0.2}>
                            <div className="pji-inner">
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="Modern exterior" loading="lazy" />
                                <div className="pji-overlay">Material Selection · 02</div>
                            </div>
                        </Reveal>
                        <Reveal className="pji-3" delay={0.3}>
                            <div className="pji-inner">
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Worksite" loading="lazy" />
                                <div className="pji-overlay">Site Foundation · 03</div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 8 — FUTURE PROJECTS
            ════════════════════════════════════════ */}
            <section className="pj-future">
                <div className="container">
                    <Reveal>
                        <span className="sv-gold-label centered">Pipeline</span>
                        <h2 className="pj-future-title">Future Developments</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="pj-future-sub">We are actively identifying and planning new residential opportunities designed for long-term growth and value creation.</p>
                    </Reveal>

                    <div className="pj-future-grid">
                        {[1, 2].map((i) => (
                            <Reveal key={i} delay={i * 0.15}>
                                <div className="pj-future-card">
                                    <div className="pj-future-card-img" />
                                    <div className="pj-future-card-content">
                                        <span className="pj-future-status">Coming Soon</span>
                                        <h3 className="pj-future-name">Residential Project · WS-{i}</h3>
                                        <p className="pj-future-meta">In Acquisition / Planning Phase</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 9 — TRUST
            ════════════════════════════════════════ */}
            <section className="pj-trust">
                <div className="container minimal-container">
                    <Reveal dir="up" delay={0.1}>
                        <p className="pj-trust-statement">
                            Every project we undertake is guided by strategy, discipline, and a commitment to delivering lasting value.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 10 — CTA
            ════════════════════════════════════════ */}
            <section className="pj-cta">
                <div className="container pj-cta-inner">
                    <Reveal>
                        <h2 className="sv-cta-title">Interested in <br /><span className="sv-cta-muted">This Project?</span></h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="sv-cta-sub">
                            Connect with us to learn more about investment opportunities or development details.
                        </p>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <div className="sv-cta-actions">
                            <a href="mailto:vandmpropertyllc@gmail.com" className="sv-cta-btn-primary">Get in Touch →</a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Footer-style legal line ── */}
            <footer className="pj-footer">
                <div className="container">
                    <p>© 2026 V&M Property LLC · All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Projects;
