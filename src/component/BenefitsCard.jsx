import { FaCheckCircle, FaClock, FaHandshake, FaDollarSign } from 'react-icons/fa';
import '../styles/BenefitsCard.css';

const benefits = [
  {
    icon: <FaCheckCircle />,
    title: 'Kualitas Terjamin',
    description: 'Setiap proyek dibuat dengan standar tinggi dan hasil yang konsisten.',
  },
  {
    icon: <FaClock />,
    title: 'Pengerjaan Cepat',
    description: 'Proses efisien tanpa mengorbankan kualitas hasil akhir.',
  },
  {
    icon: <FaHandshake />,
    title: 'Pelayanan Profesional',
    description: 'Tim berpengalaman yang responsif dan fokus pada kepuasan klien.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Harga Transparan',
    description: 'Biaya kompetitif dan fleksibel sesuai kebutuhan bisnis Anda.',
  },
];

const BenefitsCard = () => {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <span className="section-label">Keunggulan</span>
        <h2 className="benefits-title">
          Mengapa Memilih <span>Webkraf?</span>
        </h2>
        <p className="benefits-subtitle">
          Kami hadir dengan layanan profesional yang dirancang untuk mendukung
          bisnis dan brand Anda berkembang.
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-card-icon">{benefit.icon}</div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCard;
