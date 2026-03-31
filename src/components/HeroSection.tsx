import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 1000], [0, 250]);
    const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

    // Premium text mask stagger animation
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const wordVariants = {
        hidden: { y: "120%", rotate: 2 },
        visible: {
            y: 0,
            rotate: 0,
            transition: { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }
        }
    };

    return (
        <section className="hero-section">
            <motion.div
                className="hero-bg"
                style={{ y: yBg }}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
            >
                <div
                    className="hero-image"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80')" }}
                />
            </motion.div>

            <div className="hero-gradient-dark"></div>

            <motion.div
                className="hero-content container"
                style={{ opacity: opacityText }}
            >
                <div className="hero-title-container">
                    <motion.h1
                        className="hero-title-premium"
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="title-line">
                            <motion.span variants={wordVariants} className="inline-block">Eigenstate</motion.span>
                        </div>
                        <div className="title-line">
                            <motion.span variants={wordVariants} className="inline-block muted-hero-dark">Of Living.</motion.span>
                        </div>
                    </motion.h1>
                </div>

                <div className="hero-bottom-grid">
                    <motion.div
                        className="hero-bottom-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    >
                        <p className="hero-p-main">Expert agents. Real guidance.</p>
                        <p className="hero-p-sub">A clear path to find what's next.</p>
                    </motion.div>

                    <motion.div
                        className="hero-btn-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.5, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <button className="stadium-btn premium-btn">
                            Find Properties
                            <span className="btn-arrow">&rarr;</span>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <div className="mouse">
                        <motion.div
                            className="wheel"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default HeroSection;
