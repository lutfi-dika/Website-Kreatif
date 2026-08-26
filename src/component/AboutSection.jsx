import { useEffect, useRef, useState } from 'react';
import { FaCode, FaPaintBrush, FaImage, FaRocket } from 'react-icons/fa';
import LogoAbout from "../assets/logo_Webkraf-removebg-preview.png";
import "../styles/AboutSection.css";

const features = [
  {
    icon: <FaCode />,
    title: 'Frontend Development',
    desc: 'Website modern, responsif, dan berkinerja tinggi.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    desc: 'Desain intuitif yang meningkatkan pengalaman pengguna.',
  },
  {
    icon: <FaImage />,
    title: 'Poster Digital',
    desc: 'Visual promosi kreatif untuk memperkuat brand Anda.',
  },
];

const stats = [
  { number: '50+', label: 'Proyek Selesai' },
  { number: '30+', label: 'Klien Puas' },
  { number: '3+', label: 'Tahun Pengalaman' },
];

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`about ${visible ? 'about-visible' : ''}`} ref={sectionRef}>
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-wrapper">
            <img src={LogoAbout} alt="Webkraf Logo" className="about-logo" />
            <div className="about-image-glow" />
          </div>
        </div>

        <div className="about-right">
          <span className="about-label">Tentang Kami</span>
          <h2 className="about-title">
            Digital Studio yang <span>Mengutamakan Kualitas</span>
          </h2>
          <p className="about-desc">
            Webkraf Digital Studio adalah tim profesional yang berfokus pada
            pembuatan website, desain UI/UX, dan konten digital. Kami membantu
            bisnis Anda tampil profesional dan bersaing di era digital.
          </p>

          <div className="about-features">
            {features.map((f, i) => (
              <div className="about-feature" key={i}>
                <div className="about-feature-icon">{f.icon}</div>
                <div>
                  <h4 className="about-feature-title">{f.title}</h4>
                  <p className="about-feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-stats">
            {stats.map((s, i) => (
              <div className="about-stat" key={i}>
                <span className="about-stat-number">{s.number}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
