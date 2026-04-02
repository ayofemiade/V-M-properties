import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PropertyCard = ({ prop, idx }: { prop: any, idx: number }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <motion.div
            ref={cardRef}
            className={`property-premium-showcase ${idx % 2 !== 0 ? 'reverse' : ''}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="showcase-img-premium"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            >
                <motion.img
                    src={prop.image}
                    alt={prop.title}
                    style={{ y: imageY }}
                    loading="lazy"
                />
            </motion.div>

            <motion.div
                className="showcase-info-premium"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
                <div className="showcase-info-inner">
                    <span className="watermark-idx">0{idx + 1}</span>
                    <span className="showcase-location muted">{prop.target}</span>
                    <h3>{prop.title}</h3>
                    <div className="showcase-desc">{prop.desc}</div>
                    <div className="showcase-bottom">
                        <div className="showcase-price">{prop.price}</div>
                        <button className="stadium-btn-outline">View Details</button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const FeaturedProperties = () => {
    const properties = [
        {
            title: "The Betach Place",
            target: "Winston-Salem, NC",
            price: "Target: Q4 2025",
            desc: (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <p style={{ lineHeight: "1.5", margin: 0, fontSize: "0.95rem" }}>
                        Thoughtfully planned residential development featuring 23 modern homes designed for young professionals, families, and retirees.
                    </p>

                    <div style={{ padding: "1rem", background: "rgba(0,0,0,0.03)", borderRadius: "6px" }}>
                        <strong style={{ display: "block", marginBottom: "0.4rem", color: "#111", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.08em" }}>Key Features</strong>
                        <p style={{ margin: 0, fontSize: "0.85rem", color: "#444", lineHeight: "1.5" }}>
                            1,500 sq ft homes &bull; Energy-efficient &bull; Low-maintenance &bull; Community layout &bull; Long-term value
                        </p>
                    </div>

                    <p style={{ fontSize: "0.9rem", color: "#555", margin: 0 }}>
                        <strong style={{ color: "#111" }}>Status:</strong> Pre-development
                    </p>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80"
        }
    ];

    return (
        <section className="featured-section" id="projects">
            <div className="container">
                <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
                    <motion.h2
                        className="section-title text-center"
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        Featured <span className="muted">Development.</span>
                    </motion.h2>
                </div>
                <p className="section-subtitle text-center" style={{ marginBottom: "6rem" }}>Spotlight on our latest thoughtfully planned residential community.</p>

                <div className="properties-showcase-list">
                    {properties.map((prop, idx) => (
                        <PropertyCard key={idx} prop={prop} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
