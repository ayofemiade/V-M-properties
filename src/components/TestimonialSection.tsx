import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "V&M completely redefined my expectations of a real estate transaction. Discrete, flawless, and extraordinarily professional.",
        name: "Alexander Pierce",
        role: "CEO, Apex Global",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    },
    {
        quote: "Finding an off-market estate in Monaco seemed impossible until we engaged V&M. They delivered precisely what we envisioned.",
        name: "Elena Rostova",
        role: "Private Investor",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
        quote: "Their white-glove service is simply unmatched. From alignment to execution, every minor detail was orchestrated with perfection.",
        name: "Jameson Wright",
        role: "Tech Entrepreneur",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    }
];

const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section className="testimonial-section-premium" id="testimonials">
            {/* Background with slight parallax and dark gradient overlay */}
            <div className="testimonial-bg-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80')` }}>
                <div className="testimonial-dark-overlay"></div>
            </div>

            <div className="container relative z-10">
                <motion.div
                    className="testimonial-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="testimonial-title">What Our <span className="gold-text">Clients Say.</span></h2>
                    <p className="testimonial-subtitle">Trusted by investors and homeowners who demand excellence</p>
                </motion.div>

                <div
                    className="testimonial-carousel"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="testimonial-card-active"
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.98 }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="quote-mark">"</div>

                            <div className="stars-container">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="gold-star" size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="testimonial-quote">{testimonials[current].quote}</p>

                            <div className="testimonial-author">
                                <div className="author-image">
                                    <img src={testimonials[current].image} alt={testimonials[current].name} />
                                </div>
                                <div className="author-details">
                                    <h4>{testimonials[current].name}</h4>
                                    <span>{testimonials[current].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="carousel-dots">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                className={`dot ${idx === current ? 'active' : ''}`}
                                onClick={() => setCurrent(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
