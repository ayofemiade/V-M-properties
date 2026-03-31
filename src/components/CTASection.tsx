import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="brand-story" style={{ padding: '8rem 0' }}>
            <motion.div
                className="container text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem' }}>Let's Find Your <span className="muted">Next Investment.</span></h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-muted)', marginBottom: '3rem' }}>Contact our private office to begin your discrete property search.</p>
                <button className="stadium-btn">Schedule a Consultation &rarr;</button>
            </motion.div>
        </section>
    );
};

export default CTASection;
