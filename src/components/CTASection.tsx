import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="cta-premium" id="contact">
            <div className="cta-watermark">V&M</div>
            <div className="container cta-content-premium">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                >
                    <h2 className="cta-title">
                        Let's Find Your <br />
                        <span className="muted-cta">Next Investment.</span>
                    </h2>
                    <p className="cta-subtitle">Contact our private office to begin your discrete property search.</p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="cta-btn-wrapper"
                    >
                        <button className="stadium-btn massive-btn hover-sweep">
                            Start The Conversation &rarr;
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
