import { motion } from 'framer-motion';
import '../our-story.css';

/* ── Reusable scroll-reveal wrapper ── */
const Reveal = ({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay }}
    >
        {children}
    </motion.div>
);

/* ── Core Values ── */
const values = [
    {
        icon: '◈',
        title: 'Excellence',
        desc: 'Every site plan, material choice, and partnership decision is held to the same standard — uncompromising quality from groundbreak to handover.',
    },
    {
        icon: '◇',
        title: 'Integrity',
        desc: 'We say what we mean and deliver what we promise. Trust is not a marketing word for us — it is the foundation every project is built on.',
    },
    {
        icon: '△',
        title: 'Innovation',
        desc: 'We apply energy-efficient construction methods and forward-thinking design to create homes that are as smart as they are beautiful.',
    },
    {
        icon: '○',
        title: 'Discipline',
        desc: 'Great developments do not happen by accident. Rigorous planning, measured decisions, and consistent execution are what separate vision from reality.',
    },
    {
        icon: '◉',
        title: 'Long-Term Value',
        desc: 'We build for the decades ahead — assets that appreciate, neighborhoods that flourish, and legacies that outlast any single transaction.',
    },
];

const OurStory = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="our-story-page">
            {/* ── Back nav ── */}
            <button className="story-back-btn" onClick={onBack}>
                <span>←</span> Back to Home
            </button>

            {/* ════════════════════════════════════════
                SECTION 1 — HERO
            ════════════════════════════════════════ */}
            <section className="os-hero">
                {/* Hero bg uses a CSS class — preloaded via link rel=preload in index.html ideally,
                    but we optimise the Unsplash URL for the right resolution */}
                <div className="os-hero-bg" />
                <div className="os-hero-overlay" />
                <motion.div
                    className="os-hero-content"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                >
                    <motion.span
                        className="os-eyebrow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        V &amp; M Property LLC — Winston-Salem, NC
                    </motion.span>
                    <h1 className="os-hero-title">Our Story</h1>
                    <p className="os-hero-sub">
                        Not just building properties —<br />
                        building futures worth living in.
                    </p>
                </motion.div>

                <motion.div
                    className="os-scroll-cue"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                >
                    <motion.span
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    >↓</motion.span>
                </motion.div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 2 — FOUNDER STORY
            ════════════════════════════════════════ */}
            <section className="os-founder">
                <div className="container os-founder-grid">
                    {/* Placeholder — replace with real founder/team photo */}
                    <motion.div
                        className="os-founder-img-wrap"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <div className="os-founder-placeholder">
                            <div className="os-placeholder-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <p className="os-placeholder-label">Founder Photo</p>
                            <p className="os-placeholder-sub">Coming Soon</p>
                        </div>
                        <div className="os-founder-img-accent" />
                    </motion.div>

                    {/* Text */}
                    <div className="os-founder-text">
                        <Reveal delay={0.1}>
                            <span className="os-gold-label">How It Started</span>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h2 className="os-section-title">
                                We Saw What Was Missing.<br />
                                <span className="os-muted-title">So We Built It.</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <p className="os-body-text">
                                V&amp;M Property LLC was born from a conviction: that residential development in underserved American communities deserved better. Not faster. Not cheaper. <em>Better.</em> Better design. Better materials. Better thinking about who actually lives in these homes and what they need for the long term.
                            </p>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="os-body-text">
                                We planted our flag in Winston-Salem, North Carolina — a city full of working families, retirees, and young professionals who deserved modern, energy-efficient housing that respected their daily lives. Our first development, <strong>The Betach Place</strong>, is a 23-home community designed precisely for them: durable, low-maintenance, thoughtfully laid out, and built to hold its value for decades.
                            </p>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <p className="os-body-text">
                                This is not a company chasing quick exits. Every decision we make — every site we assess, every partnership we enter, every block we lay — is guided by one discipline: do it right the first time, because real communities depend on it.
                            </p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <div className="os-founder-signature">
                                <div className="os-sig-line" />
                                <p className="os-sig-name">V &amp; M Property LLC</p>
                                <p className="os-sig-title">Established · Winston-Salem, North Carolina</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 3 — VISION
            ════════════════════════════════════════ */}
            <section className="os-vision">
                <div className="container os-vision-inner">
                    <Reveal>
                        <span className="os-gold-label centered">The North Star</span>
                    </Reveal>
                    <motion.blockquote
                        className="os-vision-quote"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                    >
                        "To build scalable real estate developments that create lasting value for people, communities, and partners — one deliberate project at a time."
                    </motion.blockquote>
                    <Reveal delay={0.3}>
                        <div className="os-vision-bar" />
                    </Reveal>
                    <Reveal delay={0.45}>
                        <p className="os-vision-body">
                            Scale without integrity is noise. We grow deliberately — because every community we enter deserves our full attention, not our overflow capacity.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 4 — MISSION
            ════════════════════════════════════════ */}
            <section className="os-mission">
                <div className="container os-mission-grid">
                    <Reveal className="os-mission-label-col">
                        <span className="os-gold-label">How We Operate</span>
                        <div className="os-mission-divider" />
                    </Reveal>
                    <div className="os-mission-text-col">
                        <Reveal delay={0.1}>
                            <h2 className="os-mission-heading">Identify. Develop. Deliver.</h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="os-body-text large">
                                We identify underserved residential markets with strong long-term fundamentals, develop high-quality housing through hands-on strategic planning, and deliver communities that stand the test of time — through strong partnerships and disciplined execution.
                            </p>
                        </Reveal>
                        <Reveal delay={0.35}>
                            <div className="os-mission-pillars">
                                {[
                                    ['01', 'Strategic Market Identification', 'We find the right land in the right communities — before the market does.'],
                                    ['02', 'Hands-On Development', 'We are directly involved in every phase: planning, design, permitting, and construction oversight.'],
                                    ['03', 'Disciplined Execution', 'Budgets, timelines, and quality standards are not suggestions. They are commitments.'],
                                ].map(([num, title, desc]) => (
                                    <div key={num} className="os-pillar os-pillar-expanded">
                                        <span className="os-pillar-num">{num}</span>
                                        <div>
                                            <span className="os-pillar-text">{title}</span>
                                            <p className="os-pillar-desc">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                VISUAL BREAK — full-bleed image strip
            ════════════════════════════════════════ */}
            <div className="os-image-break">
                <motion.div
                    className="os-image-break-inner"
                    initial={{ opacity: 0, scale: 1.06 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                >
                    {/* w=1400 at q=75 — wide but lean for a full-bleed strip */}
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=75"
                        alt="Modern residential development"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="os-image-break-caption">
                        <span>The Betach Place — Winston-Salem, NC</span>
                        <span className="os-caption-dot">·</span>
                        <span>Target: Q4 2025</span>
                    </div>
                </motion.div>
            </div>

            {/* ════════════════════════════════════════
                SECTION 5 — CORE VALUES
            ════════════════════════════════════════ */}
            <section className="os-values">
                <div className="container">
                    <Reveal>
                        <span className="os-gold-label centered">Non-Negotiables</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="os-values-title">The Standards We Hold</h2>
                    </Reveal>

                    <div className="os-values-grid">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                className="os-value-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: i * 0.1 }}
                                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.1)', borderColor: '#C6A87D' }}
                            >
                                <span className="os-value-icon">{v.icon}</span>
                                <h3 className="os-value-title">{v.title}</h3>
                                <p className="os-value-desc">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                CLOSING CTA
            ════════════════════════════════════════ */}
            <section className="os-closing">
                <div className="container os-closing-inner">
                    <Reveal>
                        <h2 className="os-closing-title">
                            This Is Only<br />
                            <span className="os-muted-closing">The Beginning.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="os-body-text centered">
                            We are actively growing — identifying our next market, our next partnership, our next community. If you are an investor, a landowner, or someone who believes that development can be done with far more intention, we want to hear from you.
                        </p>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <div className="os-closing-ctas">
                            <a href="mailto:vandmpropertyllc@gmail.com" className="os-cta-primary">
                                Start a Conversation →
                            </a>
                            <button className="os-cta-secondary" onClick={onBack}>
                                Explore Our Work
                            </button>
                        </div>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <div className="os-closing-contact">
                            <a href="mailto:vandmpropertyllc@gmail.com" className="os-closing-link">vandmpropertyllc@gmail.com</a>
                            <span className="os-caption-dot">·</span>
                            <a href="tel:3366189354" className="os-closing-link">(336) 618-9354</a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default OurStory;
