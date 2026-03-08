import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/blog', label: 'Blog' },
        { to: '/about', label: 'About' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">✦</span>
                    <span className="navbar__logo-text">
                        Blog<span className="gold-text">List</span>
                    </span>
                </Link>

                <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a href="#newsletter" className="btn-primary navbar__cta">
                        Subscribe
                    </a>
                </div>

                <button
                    className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
