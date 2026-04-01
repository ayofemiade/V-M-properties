import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BG_IMAGE = "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80')";

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    /* ── PHASE 2: Text exits (0 → 22%) ─ ultra-slow, cinematic ── */
    const textOpacity = useTransform(scrollYProgress, [0, 0.20], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.22], ["0px", "-100px"]);

    /* ── Background scale & parallax ── */
    const bgScale = useTransform(scrollYProgress, [0, 1.0], [1, 1.18]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0px", "180px"]);

    /* ── 
       KEY EFFECT: A WHITE overlay fades in over the bg image (25% → 65%).
       This makes the surrounding go bright white.
       The logo text has its OWN bg-clip image, so it remains vivid inside the letters.
    ── */
    const whiteVeilOpacity = useTransform(
        scrollYProgress,
        [0, 0.22, 0.40, 0.65, 0.85, 1.0],
        [0, 0, 0.78, 0.92, 0.92, 1.0]
    );

    /* ── The dark vignette fades OUT as logo approaches (replaced by white) ── */
    const vignetteOpacity = useTransform(
        scrollYProgress,
        [0, 0.20, 0.38],
        [1, 1, 0]
    );

    /* ── PHASE 3: Logo reveal (25% → 70%), fades out (80% → 95%) ── */
    const logoOpacity = useTransform(
        scrollYProgress,
        [0.22, 0.40, 0.72, 0.90],
        [0, 1, 1, 0]
    );
    const logoScale = useTransform(scrollYProgress, [0.22, 0.60], [0.80, 1.0]);
    // Letter spacing expands as logo enters — cinematic reveal
    const logoLetterSpacing = useTransform(
        scrollYProgress,
        [0.22, 0.60],
        ['-0.06em', '0.05em']
    );

    /* ── Sub-text (PROPERTIES line) delayed reveal ── */
    const subTextOpacity = useTransform(
        scrollYProgress,
        [0.32, 0.50, 0.72, 0.90],
        [0, 1, 1, 0]
    );
    const subTextY = useTransform(scrollYProgress, [0.32, 0.50], ["20px", "0px"]);

    /* ── Scroll indicator fades at the very start ── */
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

    return (
        <section ref={sectionRef} className="hero-scroll-section" id="home">
            <div className="hero-sticky">

                {/* ── Background image ── */}
                <motion.div className="hero-bg" style={{ scale: bgScale, y: bgY }}>
                    <div className="hero-image" style={{ backgroundImage: BG_IMAGE }} />
                </motion.div>

                {/* ── Dark vignette (fades OUT as white veil takes over) ── */}
                <motion.div className="hero-vignette" style={{ opacity: vignetteOpacity }} />

                {/* ── WHITE VEIL: The key layer. Fades over background, leaving only the text-clipped image visible ── */}
                <motion.div
                    className="hero-white-veil"
                    style={{ opacity: whiteVeilOpacity }}
                />

                {/* ── PHASE 1–2: Initial hero text ── */}
                <motion.div
                    className="hero-content container"
                    style={{ opacity: textOpacity, y: textY }}
                >
                    <div className="hero-title-container">
                        <motion.h1
                            className="hero-title-premium"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        >
                            <div className="title-line">
                                <span className="inline-block">Where Luxury</span>
                            </div>
                            <div className="title-line">
                                <span className="inline-block muted-hero-dark">Finds Home.</span>
                            </div>
                        </motion.h1>
                    </div>

                    <div className="hero-bottom-grid">
                        <motion.div
                            className="hero-bottom-text"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <p className="hero-p-main">Expert agents. Real guidance.</p>
                            <p className="hero-p-sub">A clear path to find what's next.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <button className="stadium-btn premium-btn">
                                Find Properties <span className="btn-arrow">&rarr;</span>
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ── PHASE 3: Logo with background-clip image (the "window" into the photo) ── */}
                <motion.div
                    className="hero-logo-reveal"
                    style={{ opacity: logoOpacity, scale: logoScale }}
                >
                    {/* 
                        This text has its OWN copy of the bg image painted inside the letters.
                        The white veil covers everything else → only letters show the photo.
                    */}
                    <motion.div
                        className="hero-logo-cutout"
                        style={{ letterSpacing: logoLetterSpacing }}
                    >
                        V&M
                    </motion.div>

                    <motion.div
                        className="hero-logo-sub-text"
                        style={{ opacity: subTextOpacity, y: subTextY }}
                    >
                        PROPERTIES
                    </motion.div>

                    <motion.div
                        className="hero-logo-tagline"
                        style={{ opacity: subTextOpacity }}
                    >
                        Where Luxury Finds Home
                    </motion.div>
                </motion.div>

                {/* ── Scroll indicator ── */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 2.2 }}
                    style={{ opacity: indicatorOpacity }}
                >
                    <div className="mouse">
                        <motion.div
                            className="wheel"
                            animate={{ y: [0, 14, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
