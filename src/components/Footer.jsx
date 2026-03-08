import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__glow"></div>
            <div className="footer__inner container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <span className="footer__logo-icon">✦</span>
                            Blog<span className="gold-text">List</span>
                        </Link>
                        <p className="footer__tagline">
                            Curating the best stories in technology, design, and modern life.
                            Join our community of curious minds.
                        </p>
                        <div className="footer__socials">
                            <a href="#" className="footer__social" aria-label="Twitter">𝕏</a>
                            <a href="#" className="footer__social" aria-label="GitHub">◆</a>
                            <a href="#" className="footer__social" aria-label="LinkedIn">in</a>
                            <a href="#" className="footer__social" aria-label="RSS">⊕</a>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/blog" className="footer__link">Blog</Link>
                        <Link to="/about" className="footer__link">About</Link>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__heading">Categories</h4>
                        <Link to="/blog?category=Design" className="footer__link">Design</Link>
                        <Link to="/blog?category=Development" className="footer__link">Development</Link>
                        <Link to="/blog?category=Technology" className="footer__link">Technology</Link>
                        <Link to="/blog?category=Business" className="footer__link">Business</Link>
                        <Link to="/blog?category=Lifestyle" className="footer__link">Lifestyle</Link>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__heading">Newsletter</h4>
                        <p className="footer__newsletter-text">
                            Get the latest posts delivered to your inbox.
                        </p>
                        <div className="footer__newsletter-form">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="footer__newsletter-input"
                            />
                            <button className="footer__newsletter-btn">→</button>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© 2026 BlogList. All rights reserved.</p>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
