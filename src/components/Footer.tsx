
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-top">
                <div className="newsletter">
                    <h2>Subscribe to our Newsletter!</h2>
                    <div className="input-group">
                        <input type="email" placeholder="Enter address" />
                        <button>&rarr;</button>
                    </div>
                    <div className="footer-contact">
                        <div>
                            <p className="muted">Head Office</p>
                            <p>5 West 37th Street, 12th Floor,<br />New York, NY 10018</p>
                        </div>
                        <div>
                            <p className="muted">Email Us</p>
                            <p>hello@vmproperties.com</p>
                        </div>
                        <div>
                            <p className="muted">Call Us</p>
                            <p>+1 212 994 9965</p>
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="links-col">
                        <a href="#">Search</a>
                        <a href="#">Agents</a>
                        <a href="#">Join</a>
                        <a href="#">About Us</a>
                        <a href="#">Agent Portal</a>
                    </div>
                    <div className="social-col">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Youtube</a>
                        <a href="#">Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <div className="footer-legal muted">
                    <span>Terms</span>
                    <span>Privacy policy</span>
                    <span>Fair Housing Notice</span>
                    <span>Copyright © 2026 V&M Real Estate</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
