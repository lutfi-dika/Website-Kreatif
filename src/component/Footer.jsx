import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-w">W</span>EBKRAF
            </a>
            <p className="footer-brand-desc">
              Digital studio profesional yang berfokus pada pembuatan website,
              desain UI/UX, dan konten digital berkualitas tinggi.
            </p>
            <div className="footer-social">
              <a href="https://github.com/lutfi-dika" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/303.andika" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="mailto:lutfiandika33@gmail.com" className="footer-social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Navigasi</h4>
            <ul className="footer-links">
              <li><a href="#hero">Beranda</a></li>
              <li><a href="#about">Tentang</a></li>
              <li><a href="#services">Layanan</a></li>
              <li><a href="#projects">Projek</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Layanan</h4>
            <ul className="footer-links">
              <li><a href="#services">Frontend Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Poster Digital</a></li>
              <li><a href="#contact">Konsultasi Gratis</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Kontak</h4>
            <ul className="footer-links">
              <li><a href="mailto:lutfiandika33@gmail.com">lutfiandika33@gmail.com</a></li>
              <li><a href="https://wa.me/6285135977841" target="_blank" rel="noopener noreferrer">0851-3597-7841</a></li>
              <li><a href="https://www.instagram.com/303.andika" target="_blank" rel="noopener noreferrer">@303.andika</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Webkraf Digital Studio. All rights reserved.
          </p>
          <p className="footer-tagline">
            Dibuat dengan semangat untuk digital Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
