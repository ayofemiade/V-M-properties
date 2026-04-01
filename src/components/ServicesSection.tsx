import { motion } from 'framer-motion';

const services = [
    {
        num: "01",
        title: "Alignment",
        icon: "◈",
        desc: "We align our vision with your ultimate lifestyle goals, mapping out exact properties that match your prestige before they ever hit the market."
    },
    {
        num: "02",
        title: "Clarity",
        icon: "◎",
        desc: "Transparent, discrete, and clear communication. You dictate the pace, and we orchestrate the logistics behind the scenes."
    },
    {
        num: "03",
        title: "Execution",
        icon: "◆",
        desc: "Seamless negotiations, flawless legal paperwork, and white-glove transition and relocation services."
    }
];

const ServicesSection = () => {
    return (
        <section className="services-section-premium">
            <div className="container premium-services-grid">

                <div className="services-left">
                    <motion.div
                        className="sticky-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <h2 className="premium-section-title">The <br />Method.</h2>
                        <p className="premium-section-sub">A calculated, discrete approach to securing your legacy. We don't just find houses; we orchestrate lifestyles.</p>
                    </motion.div>
                </div>

                <div className="services-right">
                    {services.map((srv, idx) => (
                        <motion.div
                            className="service-card-premium"
                            key={idx}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.25, 1, 0.5, 1] }}
                        >
                            {/* Gold accent top bar */}
                            <div className="card-gold-bar"></div>

                            <div className="service-card-inner">
                                {/* Step number + icon row */}
                                <div className="card-top-row">
                                    <span className="card-step-num">{srv.num}</span>
                                    <span className="card-icon">{srv.icon}</span>
                                </div>

                                <h3 className="card-title">{srv.title}</h3>
                                <p className="card-desc">{srv.desc}</p>

                                {/* Arrow CTA */}
                                <div className="card-arrow">→</div>
                            </div>

                            {/* Large watermark number */}
                            <div className="service-num-huge">{srv.num}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
