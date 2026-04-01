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
                    <h2 className="ba-title">Transformation That <span className="muted">Speaks for Itself.</span></h2>
                    <p className="ba-subtitle">See how we turn properties into premium investments.</p>
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
                    {/* After Image (Background) */}
                    <div className="ba-image ba-after">
                        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80" alt="After Renovation" draggable="false" />
                        <div className="ba-label ba-label-after">AFTER</div>
                    </div>

                    {/* Before Image (Overlay clipped) */}
                    <div
                        className="ba-image ba-before"
                        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    >
                        <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80" alt="Before Renovation" draggable="false" />
                        <div className="ba-label ba-label-before">BEFORE</div>
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
                    <strong>The Hollywood Hills Estate</strong>
                    <span>Full-Scale Modernization &middot; Value Increased by 150%</span>
                </motion.div>

            </div>
        </section>
    );
};

export default BeforeAfterSection;
