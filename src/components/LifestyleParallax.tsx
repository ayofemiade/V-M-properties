import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LifestyleParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section className="lifestyle-parallax" ref={ref}>
            <motion.div
                className="parallax-bg"
                style={{
                    y: yImage,
                    backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2500&q=80')",
                }}
            />
            <div className="parallax-overlay"></div>
            <motion.div
                className="parallax-content container text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2>The Art of <br />Living Well.</h2>
                <p>Beyond walls and windows, we curate lifestyles. Experience the breathtaking reality of our estates.</p>
                <button className="stadium-btn mt-8">Explore The Lifestyle &rarr;</button>
            </motion.div>
        </section>
    );
};

export default LifestyleParallax;
