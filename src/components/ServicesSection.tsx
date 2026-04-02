import { motion } from 'framer-motion';

const services = [
    {
        num: "01",
        title: "Residential Development",
        icon: "◈",
        desc: "We develop single-family and multi-family residential projects designed for durability, efficiency, and long-term value."
    },
    {
        num: "02",
        title: "Fix & Flip Investments",
        icon: "◎",
        desc: "Strategic acquisition and renovation of undervalued properties to maximize market value and returns."
    },
    {
        num: "03",
        title: "Real Estate Consulting",
        icon: "◆",
        desc: "We provide guidance on property acquisition, development feasibility, and investment strategy."
    },
    {
        num: "04",
        title: "Investment Opportunities",
        icon: "◇",
        desc: "We partner with investors looking to participate in structured real estate projects with clear returns."
    }
];

interface ServicesSectionProps {
    onNavigate?: (page: 'home' | 'our-story' | 'services', anchor?: string) => void;
}

const ServicesSection = ({ onNavigate }: ServicesSectionProps) => {
    return (
        <section className="services-section-premium" id="services-section-home">
            <div className="container premium-services-grid">

                <div className="services-left">
                    <motion.div
                        className="sticky-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <h2 className="premium-section-title">Core <br />Services.</h2>
                        <p className="premium-section-sub">A comprehensive suite of real estate solutions tailored for durability, strategic growth, and long-term value generation.</p>

                        <motion.button
                            className="stadium-btn-outline mt-8"
                            onClick={() => onNavigate?.('services')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Our Capabilities &rarr;
                        </motion.button>
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
                            onClick={() => onNavigate?.('services')}
                            style={{ cursor: 'pointer' }}
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

