import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSection = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        let percentage = (x / rect.width) * 100;
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        setSliderPos(percentage);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        const handleMouseMoveGlobal = (e: MouseEvent) => {
            if (isDragging) handleMove(e.clientX);
        };
        const handleTouchMoveGlobal = (e: TouchEvent) => {
            if (isDragging) handleMove(e.touches[0].clientX);
        };

        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mousemove', handleMouseMoveGlobal);
            window.addEventListener('touchend', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
        }

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMoveGlobal);
            window.removeEventListener('touchend', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMoveGlobal);
        };
    }, [isDragging]);

    return (
        <section className="before-after-section" id="transformation">
            <div className="container">
                <motion.div
                    className="ba-header text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                >
                    <span className="concept-preview-label">Concept Preview</span>
                    <h2 className="ba-title">A Glimpse Into <br /><span className="muted">What We’re Building.</span></h2>
                    <p className="ba-subtitle">Explore how our developments evolve from raw potential into premium living experiences.</p>
                </motion.div>

                <motion.div
                    className="ba-interactive-container"
                    ref={containerRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    onMouseDown={(e: any) => { setIsDragging(true); handleMove(e.clientX); }}
                    onTouchStart={(e: any) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
                >
                    {/* After Image (Background - High-end Render) */}
                    <div className="ba-image ba-after">
                        <motion.img
                            initial={{ scale: 1.05 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
                            alt="Proposed Development"
                            draggable="false"
                            loading="lazy"
                        />
                        <div className="ba-label ba-label-after">Proposed Development</div>
                    </div>

                    {/* Before Image (Overlay clipped - Raw Structure) */}
                    <div
                        className="ba-image ba-before"
                        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    >
                        <motion.img
                            initial={{ scale: 1.05 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                            src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=80"
                            alt="Current State"
                            draggable="false"
                            loading="lazy"
                        />
                        <div className="ba-label ba-label-before">Current State</div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="ba-slider-handle"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="ba-slider-line"></div>
                        <div className="ba-slider-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="ba-caption"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <strong>Project In Development</strong>
                    <span>Phase 1 Construction &middot; Q4 2026 Target Completion</span>
                </motion.div>

            </div>
        </section>
    );
};

export default BeforeAfterSection;
