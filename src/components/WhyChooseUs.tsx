import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const reasons = [
    {
        num: "1",
        title: "Strategic Thinking",
        text: "Every project is analyzed for both short-term returns and long-term sustainability.",
        bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
    },
    {
        num: "2",
        title: "Hands-On Execution",
        text: "Direct involvement in planning, design, and delivery.",
        bgImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80"
    },
    {
        num: "3",
        title: "Community Focus",
        text: "We build with people in mind, not just profit.",
        bgImage: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80"
    },
    {
        num: "4",
        title: "Adaptability",
        text: "Ability to pivot between single-family, multi-family, and emerging opportunities.",
        bgImage: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1600&q=80"
    },
    {
        num: "5",
        title: "Integrity-Driven",
        text: "Transparent, honest, and relationship-centered approach.",
        bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
    },
];

const WhyChooseUs = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Preload all high-res Unsplash images silently in the background
    useEffect(() => {
        reasons.forEach((reason) => {
            const img = new Image();
            img.src = reason.bgImage;
        });
    }, []);

    return (
        <section className="why-interactive-section">
            <div className="why-interactive-header container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Why Choose <span className="muted">V&M Property LLC.</span>
                </motion.h2>
            </div>

            <div className="why-rows-container">
                {reasons.map((item, idx) => {
                    const isHovered = hoveredIdx === idx;

                    return (
                        <div
                            key={idx}
                            className={`why-row-premium ${isHovered ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            {/* Background Image that fades in on hover */}
                            <div
                                className="why-row-bg"
                                style={{ backgroundImage: `url(${item.bgImage})` }}
                            >
                                <div className="why-row-overlay"></div>
                            </div>

                            <motion.div
                                className="why-row-content container"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                            >
                                <div className="why-col-circle">
                                    <div className="circle-num">{item.num}</div>
                                </div>
                                <div className="why-col-text">
                                    <p>{item.text}</p>
                                </div>
                                <div className="why-col-title">
                                    <h3 className="massive-title">
                                        {item.title}
                                        <div className="title-underline"></div>
                                    </h3>
                                </div>
                                <div className="why-col-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" />
                                    </svg>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhyChooseUs;
