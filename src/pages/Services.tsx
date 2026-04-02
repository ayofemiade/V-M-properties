import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../services.css';

/* ── Scroll-reveal wrapper ── */
const Reveal = ({
    children,
    delay = 0,
    className = '',
    dir = 'up',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    dir?: 'up' | 'left' | 'right';
}) => {
    const initial = {
        up: { opacity: 0, y: 50 },
        left: { opacity: 0, x: -60 },
        right: { opacity: 0, x: 60 },
    }[dir];

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.95, ease: [0.25, 1, 0.5, 1], delay }}
        >
            {children}
        </motion.div>
    );
};

/* ── Service blocks data ── */
const services = [
    {
        num: '01',
        title: 'Residential Development',
        desc: 'We develop single-family and multi-family residential communities designed for durability, energy efficiency, and long-term value. Every project is planned with precision — from site selection and engineering to final handover — ensuring quality construction and strong investment potential for every stakeholder.',
        detail: ['Site Analysis & Acquisition', 'Design & Permitting', 'Ground-Up Construction', 'Community Development'],
        // Optimised: w=1100 q=75 — sharp for the layout, lean on network
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=75',
        imgAlt: 'Modern residential development',
        flip: false,
    },
    {
        num: '02',
        title: 'Fix & Flip Investments',
        desc: 'We strategically acquire undervalued properties and transform them into high-value assets through thoughtful renovation and expert market positioning. Our approach maximises return on every dollar through disciplined cost control, smart design decisions, and proven knowledge of what buyers want.',
        detail: ['Property Sourcing & Due Diligence', 'Budget & Timeline Planning', 'Renovation Management', 'Resale & Market Strategy'],
        img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1100&q=75',
        imgAlt: 'Property renovation interior',
        flip: true,
    },
    {
        num: '03',
        title: 'Real Estate Consulting',
        desc: 'We advise clients on property acquisition, development feasibility, and investment strategy — translating complex market data into clear, actionable decisions. Whether you are entering the market for the first time or scaling an existing portfolio, our guidance is built on real deal experience, not theory.',
        detail: ['Market & Feasibility Analysis', 'Portfolio Strategy', 'Acquisition Advisory', 'Development Planning'],
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=75',
        imgAlt: 'Strategic real estate planning',
        flip: false,
    },
    {
        num: '04',
        title: 'Investment Opportunities',
        desc: 'We partner with capital-seeking investors in structured real estate opportunities with defined strategies, transparent timelines, and strong return potential. Our projects are backed by disciplined underwriting and direct operator involvement — so your capital is working alongside ours.',
        detail: ['Project-Specific Partnerships', 'Transparent Underwriting', 'Defined ROI Timelines', 'Direct Operator Access'],
        img: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1100&q=75',
        imgAlt: 'Real estate investment meeting',
        flip: true,
    },
];

/* ── Trust pillars ── */
const pillars = [
    { icon: '◈', title: 'Strategic Planning', desc: 'Every project begins with deep market research and rigorous feasibility analysis before a single dollar is committed.' },
    { icon: '◇', title: 'Strong Partnerships', desc: 'We build and maintain relationships with contractors, lenders, municipalities, and investors that move projects forward.' },
    { icon: '△', title: 'Disciplined Execution', desc: 'Budgets and timelines are not aspirational — they are commitments we manage ourselves, on the ground.' },
    { icon: '○', title: 'Long-Term Value', desc: 'We optimise for lasting appreciation, not short-term margin — because our reputation is built project by project.' },
];

/* ── Individual service block ── */
const ServiceBlock = ({ service, index }: { service: typeof services[0]; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

    return (
        <div
            ref={ref}
            className={`sv-block ${service.flip ? 'sv-block-flip' : ''}`}
        >
            {/* Image column */}
            <motion.div
                className="sv-block-img-wrap"
                initial={{ opacity: 0, x: service.flip ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            >
                <div className="sv-block-img-inner">
                    <motion.img
                        src={service.img}
                        alt={service.imgAlt}
                        style={{ y: imageY }}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={index === 0 ? 'high' : 'low'}
                    />
                    <div className="sv-block-num-badge">{service.num}</div>
                </div>
            </motion.div>

            {/* Text column */}
            <div className="sv-block-text">
                <Reveal delay={0.1} dir={service.flip ? 'right' : 'left'}>
                    <span className="sv-gold-label">{service.num} / 04</span>
                </Reveal>
                <Reveal delay={0.2} dir={service.flip ? 'right' : 'left'}>
                    <h2 className="sv-block-title">{service.title}</h2>
                </Reveal>
                <Reveal delay={0.3} dir={service.flip ? 'right' : 'left'}>
                    <p className="sv-block-desc">{service.desc}</p>
                </Reveal>
                <Reveal delay={0.4} dir={service.flip ? 'right' : 'left'}>
                    <ul className="sv-detail-list">
                        {service.detail.map(d => (
                            <li key={d} className="sv-detail-item">
                                <span className="sv-detail-dot" />
                                {d}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </div>
    );
};

/* ── MAIN PAGE ── */
const Services = ({ onBack }: { onBack: () => void }) => (
    <div className="services-page">
        {/* Back button */}
        <button className="story-back-btn" onClick={onBack}>
            <span>←</span> Back to Home
        </button>

        {/* ══════════════════════════
            SECTION 1 — HERO
        ══════════════════════════ */}
        <section className="sv-hero">
            <div className="sv-hero-bg" />
            <div className="sv-hero-overlay" />
            <motion.div
                className="sv-hero-content"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
                <motion.span
                    className="sv-eyebrow"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.15 }}
                >
                    What We Do
                </motion.span>
                <h1 className="sv-hero-title">Our Capabilities</h1>
                <p className="sv-hero-sub">
                    Strategic development. Smart investments.<br />
                    Lasting value.
                </p>
            </motion.div>
            <motion.div
                className="sv-scroll-cue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
            >
                <motion.span
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >↓</motion.span>
            </motion.div>
        </section>

        {/* ══════════════════════════
            SECTION 2 — OVERVIEW
        ══════════════════════════ */}
        <section className="sv-overview">
            <div className="container sv-overview-inner">
                <Reveal>
                    <span className="sv-gold-label centered">End-to-End Real Estate</span>
                </Reveal>
                <motion.p
                    className="sv-overview-text"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                >
                    We provide end-to-end real estate solutions — from ground-up development to strategic investment partnerships — designed to deliver long-term value for communities, clients, and capital alike.
                </motion.p>
                <Reveal delay={0.3}>
                    <div className="sv-overview-bar" />
                </Reveal>
            </div>
        </section>

        {/* ══════════════════════════
            SECTION 3 — SERVICE BLOCKS
        ══════════════════════════ */}
        <section className="sv-services">
            <div className="sv-services-inner">
                {services.map((s, i) => (
                    <ServiceBlock key={s.num} service={s} index={i} />
                ))}
            </div>
        </section>

        {/* ══════════════════════════
            SECTION 4 — TRUST PILLARS
        ══════════════════════════ */}
        <section className="sv-trust">
            <div className="container">
                <Reveal>
                    <span className="sv-gold-label centered">Why Work With Us</span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="sv-trust-title">The V&amp;M Standard</h2>
                </Reveal>
                <div className="sv-pillars-grid">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            className="sv-pillar-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1], delay: i * 0.1 }}
                            whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.08)', borderColor: '#C6A87D' }}
                        >
                            <span className="sv-pillar-icon">{p.icon}</span>
                            <h3 className="sv-pillar-title">{p.title}</h3>
                            <p className="sv-pillar-desc">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ══════════════════════════
            SECTION 5 — CTA
        ══════════════════════════ */}
        <section className="sv-cta">
            <div className="container sv-cta-inner">
                <Reveal>
                    <h2 className="sv-cta-title">
                        Let's Build Something<br />
                        <span className="sv-cta-muted">Valuable Together.</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="sv-cta-sub">
                        Whether you're investing capital, developing land, or seeking strategic guidance — we're ready to work with you.
                    </p>
                </Reveal>
                <Reveal delay={0.35}>
                    <div className="sv-cta-actions">
                        <a href="mailto:vandmpropertyllc@gmail.com" className="sv-cta-btn-primary">
                            Get in Touch →
                        </a>
                        <a href="tel:3366189354" className="sv-cta-btn-secondary">
                            (336) 618-9354
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    </div>
);

export default Services;
