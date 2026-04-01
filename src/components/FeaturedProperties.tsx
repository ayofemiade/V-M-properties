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
                    <p className="showcase-desc">{prop.desc}</p>
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
        { title: "The Beverly Estate", target: "Los Angeles, CA", price: "$24,500,000", desc: "An architectural triumph located in the exclusive Bird Streets. Walls of glass reveal unobstructed city-to-ocean views, defining the ultimate LA lifestyle.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80" },
        { title: "Azure Penthouse", target: "Monaco", price: "€32,000,000", desc: "Hovering above the Mediterranean, this entire-floor penthouse offers wrap-around terraces and bespoke finishes fitting for royalty.", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80" },
        { title: "Villa Serenade", target: "Lake Como, Italy", price: "€18,900,000", desc: "A historic 19th-century waterfront villa seamlessly restored. Private boat dock, manicured gardens, and centuries of aristocratic heritage.", image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80" }
    ];

    return (
        <section className="featured-section" id="properties">
            <div className="container">
                <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
                    <motion.h2
                        className="section-title text-center"
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        The Masterpiece <span className="muted">Collection.</span>
                    </motion.h2>
                </div>
                <p className="section-subtitle text-center" style={{ marginBottom: "6rem" }}>A curated selection of the world's most luxurious estates.</p>

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
