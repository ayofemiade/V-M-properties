import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../contact.css';

/* ── Reusable scroll-reveal wrapper ── */
const Reveal = ({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay }}
    >
        {children}
    </motion.div>
);

const Contact = ({ onBack }: { onBack: () => void }) => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'Investment Inquiry',
        message: ''
    });

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Force scroll to top on mount to fix mobile "direct to bottom" bug
        window.scrollTo(0, 0);
    }, []);
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            {/* ── Back nav ── */}
            <button className="story-back-btn" onClick={onBack}>
                <span>←</span> Back to Home
            </button>

            {/* ════════════════════════════════════════
                SECTION 1 — HERO
            ════════════════════════════════════════ */}
            <section className="ct-hero">
                <div className="ct-hero-bg" />
                <div className="ct-hero-gradient" />
                <motion.div
                    className="ct-hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                >
                    <span className="ct-hero-eyebrow">Contact Us</span>
                    <h1 className="ct-hero-title">
                        Get in <br />
                        <span className="gold-text">Touch.</span>
                    </h1>
                    <p className="ct-hero-sub">
                        Whether you’re investing, developing, or exploring opportunities,
                        we’d love to hear from you.
                    </p>
                </motion.div>

            </section>

            {/* ════════════════════════════════════════
                SECTION 2 — INTRO
            ════════════════════════════════════════ */}
            <section className="ct-intro">
                <div className="container minimal-container">
                    <Reveal>
                        <p className="ct-intro-text">
                            We’re available to discuss projects, partnerships, and investment opportunities. Reach out and we’ll respond promptly.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 3 — FORM & INFO (SPLIT)
            ════════════════════════════════════════ */}
            <section className="ct-main-content">
                <div className="container ct-split-grid">

                    {/* Left: Form */}
                    <div className="ct-form-side">
                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div
                                    className="ct-success-card"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="success-icon">✦</div>
                                    <h3>Message Received.</h3>
                                    <p>Thank you for reaching out. A member of our private office will connect with you shortly.</p>
                                    <button className="stadium-btn-outline mt-8" onClick={() => setFormState('idle')}>Send Another</button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    ref={formRef}
                                    className="ct-form-premium"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="form-row">
                                        <Reveal delay={0.1} className="form-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </Reveal>
                                        <Reveal delay={0.2} className="form-group">
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </Reveal>
                                    </div>
                                    <div className="form-row">
                                        <Reveal delay={0.3} className="form-group">
                                            <label>Phone Number (Optional)</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="(000) 000-0000"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </Reveal>
                                        <Reveal delay={0.4} className="form-group">
                                            <label>Subject</label>
                                            <select name="subject" value={formData.subject} onChange={handleChange}>
                                                <option>Investment Inquiry</option>
                                                <option>Property Development</option>
                                                <option>Strategic Partnership</option>
                                                <option>Other</option>
                                            </select>
                                        </Reveal>
                                    </div>
                                    <Reveal delay={0.5} className="form-group full-width">
                                        <label>Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="How can we assist you?"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </Reveal>

                                    <Reveal delay={0.6} className="mt-8">
                                        <button
                                            type="submit"
                                            className={`stadium-btn massive-btn hover-sweep ${formState === 'submitting' ? 'loading' : ''}`}
                                            disabled={formState === 'submitting'}
                                        >
                                            {formState === 'submitting' ? 'Sending...' : 'Send Message'} &rarr;
                                        </button>
                                    </Reveal>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right: Info */}
                    <div className="ct-info-side">
                        <div className="ct-info-sticky">
                            <Reveal delay={0.2}>
                                <span className="sv-gold-label">Direct Lines</span>
                                <div className="ct-info-block">
                                    <p className="ct-info-label">Email Our Office</p>
                                    <a href="mailto:vandmpropertyllc@gmail.com" className="ct-info-val">vandmpropertyllc@gmail.com</a>
                                </div>
                                <div className="ct-info-block">
                                    <p className="ct-info-label">Phone Inquiry</p>
                                    <a href="tel:3366189354" className="ct-info-val">(336) 618-9354</a>
                                </div>
                                <div className="ct-info-block">
                                    <p className="ct-info-label">Headquarters</p>
                                    <p className="ct-info-val grey">Winston-Salem, North Carolina</p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.4} className="ct-social-invite">
                                <div className="accent-line"></div>
                                <p>We value professionalism, discretion, and timely communication in every interaction.</p>
                            </Reveal>
                        </div>
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 4 — TRUST
            ════════════════════════════════════════ */}
            <section className="ct-trust">
                <div className="container minimal-container">
                    <Reveal>
                        <p className="ct-trust-text">"Our growth is measured by the strength of our relationships and the excellence of our execution."</p>
                    </Reveal>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 5 — FINAL CTA
            ════════════════════════════════════════ */}
            <section className="ct-final-cta">
                <div className="container text-center">
                    <Reveal>
                        <h2 className="ct-cta-title">Let’s Start the <br /><span className="muted">Conversation.</span></h2>
                        <p className="ct-cta-sub">We’re ready when you are.</p>
                    </Reveal>
                    <Reveal delay={0.2} className="mt-12">
                        <button className="stadium-btn premium-btn mx-auto" onClick={scrollToForm}>
                            Send a Message &rarr;
                        </button>
                    </Reveal>
                </div>
            </section>

            <footer className="pj-footer">
                <div className="container">
                    <p>© 2026 V&M Property LLC · All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
