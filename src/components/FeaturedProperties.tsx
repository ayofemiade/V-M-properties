import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProperties = () => {
    const properties = [
        {
            title: "The Beverly Estate",
            target: "Los Angeles, CA",
            price: "$24,500,000",
            desc: "An architectural triumph located in the exclusive Bird Streets. Walls of glass reveal unobstructed city-to-ocean views, defining the ultimate LA lifestyle.",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
        },
        {
            title: "Azure Penthouse",
            target: "Monaco",
            price: "€32,000,000",
            desc: "Hovering above the Mediterranean, this entire-floor penthouse offers wrap-around terraces and bespoke finishes fitting for royalty.",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
        },
        {
            title: "Villa Serenade",
            target: "Lake Como, Italy",
            price: "€18,900,000",
            desc: "A historic 19th-century waterfront villa seamlessly restored. Private boat dock, manicured gardens, and centuries of aristocratic heritage.",
            image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80"
        }
    ];

    return (
        <section className="featured-section" id="properties">
            <div className="container">
                <h2 className="section-title text-center">The Masterpiece <span className="muted">Collection.</span></h2>
                <p className="section-subtitle text-center">A curated selection of the world's most luxurious estates.</p>

                <div className="properties-showcase-list">
                    {properties.map((prop, idx) => (
                        <motion.div
                            key={idx}
                            className={`property-showcase ${idx % 2 !== 0 ? 'reverse' : ''}`}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="showcase-image-wrapper">
                                <img src={prop.image} alt={prop.title} />
                            </div>
                            <div className="showcase-info">
                                <span className="showcase-location muted">{prop.target}</span>
                                <h3>{prop.title}</h3>
                                <p className="showcase-desc">{prop.desc}</p>
                                <div className="showcase-bottom">
                                    <div className="showcase-price">{prop.price}</div>
                                    <button className="stadium-btn-outline">View Details</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
