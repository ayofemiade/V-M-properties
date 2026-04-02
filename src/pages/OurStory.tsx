import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../our-story.css';

/* ── Reusable scroll-reveal wrapper ── */
const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
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

/* ── Core Values data ── */
const values = [
    {
        icon: '◈',
        title: 'Excellence',
        desc: 'We hold every project to an uncompromising standard — from land acquisition to final delivery.',
    },
    {
        icon: '◇',
        title: 'Integrity',
        desc: 'Transparent, honest relationships with partners, investors, and communities are non-negotiable.',
    },
    {
        icon: '△',
        title: 'Innovation',
        desc: 'We constantly seek smarter approaches to design, financing, and community-minded development.',
    },
    {
        icon: '○',
        title: 'Discipline',
        desc: 'Strategic thinking and consistent execution separate good ideas from real outcomes.',
    },
    {
        icon: '◉',
        title: 'Long-term Value',
        desc: 'We build for decades, not quarters — creating assets that appreciate and communities that thrive.',
    },
];

const OurStory = ({ onBack }: { onBack: () => void }) => {
    const founderRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: founderScroll } = useScroll({
        target: founderRef,
        offset: ['start end', 'end start'],
    });
    const founderImageY = useTransform(founderScroll, [0, 1], ['-8%', '8%']);

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
                        V &amp; M Property LLC
                    </motion.span>
                    <h1 className="os-hero-title">Our Story</h1>
                    <p className="os-hero-sub">
                        Built on vision, driven by value,<br />
                        and focused on the future.
                    </p>
                </motion.div>

                {/* Scroll cue */}
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
            <section className="os-founder" ref={founderRef}>
                <div className="container os-founder-grid">
                    {/* Image */}
                    <motion.div
                        className="os-founder-img-wrap"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                            alt="Founder"
                            style={{ y: founderImageY }}
                            loading="lazy"
                        />
                        <div className="os-founder-img-accent" />
                    </motion.div>

                    {/* Text */}
                    <div className="os-founder-text">
                        <Reveal delay={0.1}>
                            <span className="os-gold-label">The Beginning</span>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h2 className="os-section-title">
                                A Clear Gap.<br />
                                <span className="os-muted-title">A Deliberate Answer.</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <p className="os-body-text">
                                V&amp;M Property LLC was founded with a simple but powerful observation: too many residential communities were being built without the people in mind. Developments that prioritized speed and short-term returns over livability, durability, and community.
                            </p>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="os-body-text">
                                We stepped in to change that. Starting in Winston-Salem, North Carolina, our first project — The Betach Place — became a blueprint for what we believe development should look like: energy-efficient, beautifully designed homes built for real families and long-term value.
                            </p>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <p className="os-body-text">
                                Every decision we make is rooted in discipline, strategic thinking, and an unwavering commitment to getting it right — not just getting it done.
                            </p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <div className="os-founder-signature">
                                <div className="os-sig-line" />
                                <p className="os-sig-name">V &amp; M Property LLC</p>
                                <p className="os-sig-title">Winston-Salem, North Carolina</p>
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
                        <span className="os-gold-label centered">Our Vision</span>
                    </Reveal>
                    <motion.blockquote
                        className="os-vision-quote"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                    >
                        "To build scalable real estate developments that create lasting value for people, communities, and partners."
                    </motion.blockquote>
                    <Reveal delay={0.3}>
                        <div className="os-vision-bar" />
                    </Reveal>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 4 — MISSION
            ════════════════════════════════════════ */}
            <section className="os-mission">
                <div className="container os-mission-grid">
                    <Reveal className="os-mission-label-col">
                        <span className="os-gold-label">Our Mission</span>
                        <div className="os-mission-divider" />
                    </Reveal>
                    <div className="os-mission-text-col">
                        <Reveal delay={0.1}>
                            <h2 className="os-mission-heading">Identify. Develop. Deliver.</h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="os-body-text large">
                                To identify, develop, and deliver high-quality residential projects through strategic planning, strong partnerships, and disciplined execution.
                            </p>
                        </Reveal>
                        <Reveal delay={0.35}>
                            <div className="os-mission-pillars">
                                {['Strategic Planning', 'Strong Partnerships', 'Disciplined Execution'].map((p, i) => (
                                    <div key={p} className="os-pillar">
                                        <span className="os-pillar-num">0{i + 1}</span>
                                        <span className="os-pillar-text">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 5 — CORE VALUES
            ════════════════════════════════════════ */}
            <section className="os-values">
                <div className="container">
                    <Reveal>
                        <span className="os-gold-label centered">What We Stand For</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="os-values-title">Core Values</h2>
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
                                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
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
                            Ready to Build<br />
                            <span className="os-muted-title">Something Lasting?</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="os-body-text centered">
                            Whether you are an investor, a community partner, or simply someone who believes in purposeful development — we would love to connect.
                        </p>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <div className="os-closing-ctas">
                            <a href="mailto:vandmpropertyllc@gmail.com" className="os-cta-primary">Start a Conversation →</a>
                            <button className="os-cta-secondary" onClick={onBack}>Explore Our Work</button>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default OurStory;
