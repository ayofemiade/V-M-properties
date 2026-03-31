import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ value, label }: { value: number, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = value / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div className="stat-item" ref={ref}>
            <div className="stat-number">{count}+</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const TrustStats = () => {
    return (
        <section className="trust-stats">
            <div className="container stats-grid">
                <AnimatedCounter value={500} label="Global Clients" />
                <AnimatedCounter value={120} label="Exclusive Properties" />
                <AnimatedCounter value={25} label="Years of Excellence" />
                <AnimatedCounter value={2} label="Billion in Sales" />
            </div>
        </section>
    );
};

export default TrustStats;
