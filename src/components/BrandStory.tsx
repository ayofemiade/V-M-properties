import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandStory = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section className="brand-story" id="story" ref={containerRef}>
            <div className="container">

                <div className="story-header" style={{ overflow: 'hidden' }}>
                    <motion.h2
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        A Legacy of <br />
                        <span className="muted">Uncompromised Luxury.</span>
                    </motion.h2>
                </div>

                <div className="story-split-advanced">

                    <motion.div
                        className="story-image-premium"
                        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                            alt="Luxury Interior"
                            style={{ y: imageY }}
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </motion.div>

                    <div className="story-text-premium">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                            className="premium-text-box"
                        >
                            <div className="accent-line"></div>
                            <p className="main-p">
                                We cater exclusively to visionaries, tastemakers, and industry leaders who seek more than just a residence.
                            </p>
                            <p className="sub-p">
                                Our properties are hand-selected masterpieces, offering unparalleled privacy, exceptional design, and world-class amenities. This is where legacy is forged.
                            </p>

                            <button className="stadium-btn-outline mt-8">Read the Manifesto &rarr;</button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BrandStory;
