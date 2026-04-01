import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ from, to, suffix = "", duration = 2.5 }: any) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView || !nodeRef.current) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easeOutQuad = progress * (2 - progress);
            const current = Math.floor(easeOutQuad * (to - from) + from);
            if (nodeRef.current) {
                nodeRef.current.textContent = current + suffix;
            }
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [inView, from, to, duration, suffix]);

    return <span ref={nodeRef}>{from}{suffix}</span>;
};

const TrustStats = () => {
    return (
        <section className="trust-stats-premium" id="stats">
            <div className="stats-bg-image">
                <div className="stats-dark-overlay"></div>
            </div>

            <div className="container relative" style={{ zIndex: 10 }}>
                <div className="stats-grid-premium">
                    {[
                        { end: 500, suffix: "+", label: "Global Clients" },
                        { end: 120, suffix: "+", label: "Exclusive Properties" },
                        { end: 25, suffix: "+", label: "Years of Excellence" },
                        { end: 2, suffix: "B+", label: "Billion in Sales" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="stat-item-premium"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="stat-number-premium">
                                <Counter from={0} to={stat.end} suffix={stat.suffix} />
                            </div>
                            <div className="stat-label-premium">{stat.label}</div>
                            {idx !== 3 && <div className="stat-divider"></div>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustStats;
