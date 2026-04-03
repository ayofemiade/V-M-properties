
interface FooterProps {
    onNavigate?: (page: 'home' | 'our-story' | 'services' | 'projects' | 'contact', anchor?: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
    const handleNav = (e: React.MouseEvent, page: 'home' | 'our-story' | 'services' | 'projects' | 'contact', anchor?: string) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate(page, anchor);
        }
    };


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
                    <a href="#story" onClick={(e) => handleNav(e, 'our-story')}>Our Story</a>
                    <a href="#services" onClick={(e) => handleNav(e, 'services')}>Services</a>
                    <a href="#projects" onClick={(e) => handleNav(e, 'projects')}>Projects</a>
                    <a href="#contact" onClick={(e) => handleNav(e, 'contact')}>Contact</a>
                </div>


                {/* Column 3: Call to Actions */}
                <div className="footer-col-links">
                    <p className="footer-heading">Inquiries</p>
                    <a href="#partner" onClick={(e) => handleNav(e, 'contact')}>Partner With Us</a>
                    <a href="#invest" onClick={(e) => handleNav(e, 'services')}>Explore Investment Opportunities</a>
                    <a href="#conversation" onClick={(e) => handleNav(e, 'contact')}>Start a Conversation</a>
                    <a href="#discuss" onClick={(e) => handleNav(e, 'contact')}>Discuss Your Property</a>
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
