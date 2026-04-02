
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-grid-new">

                {/* Column 1: Brand & Contact */}
                <div className="footer-col-brand">
                    <img src="/logo.png" alt="V&M Property LLC Logo" className="footer-logo-img" />
                    <p className="footer-vision">From Vision to Reality, We Develop Real Estate That Works.</p>

                    <div className="footer-direct-contact">
                        <a href="mailto:vandmpropertyllc@gmail.com" className="contact-link">vandmpropertyllc@gmail.com</a>
                        <a href="tel:(336)618-9354" className="contact-link">(336) 618-9354</a>
                    </div>
                </div>

                {/* Column 2: Navigation Links */}
                <div className="footer-col-links">
                    <p className="footer-heading">Navigation</p>
                    <a href="#story">Our Story</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Column 3: Call to Actions */}
                <div className="footer-col-links">
                    <p className="footer-heading">Inquiries</p>
                    <a href="#partner">Partner With Us</a>
                    <a href="#invest">Explore Investment Opportunities</a>
                    <a href="#conversation">Start a Conversation</a>
                    <a href="#discuss">Discuss Your Property</a>
                </div>

            </div>

            <div className="container footer-bottom">
                <div className="footer-legal muted">
                    <span>Terms</span>
                    <span>Privacy policy</span>
                    <span>Fair Housing Notice</span>
                    <span>Copyright © 2026 V&M Property LLC.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
