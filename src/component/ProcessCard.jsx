import '../styles/ProcessCard.css';

const processData = [
  {
    number: '01',
    title: 'Konsultasi & Riset',
    description: 'Kami memahami kebutuhan bisnis Anda melalui diskusi mendalam dan analisis pasar.',
  },
  {
    number: '02',
    title: 'Perencanaan & Desain',
    description: 'Merancang struktur, wireframe, dan desain visual yang sesuai dengan brand Anda.',
  },
  {
    number: '03',
    title: 'Pengembangan',
    description: 'Mengubah desain menjadi website fungsional dengan performa dan SEO terbaik.',
  },
  {
    number: '04',
    title: 'Testing & Revisi',
    description: 'Melakukan pengujian menyeluruh dan revisi sesuai feedback untuk hasil sempurna.',
  },
  {
    number: '05',
    title: 'Launching & Dukungan',
    description: 'Website live dan siap digunakan. Kami tetap memberikan dukungan pasca-peluncuran.',
  },
];

const ProcessCard = () => {
  return (
    <section id="process" className="process">
      <div className="process-container">
        <span className="section-label">Proses Kerja</span>
        <h2 className="process-title">
          Alur Kerja <span>Profesional</span>
        </h2>
        <p className="process-subtitle">
          Proses terstruktur dan transparan untuk memastikan setiap proyek
          berjalan lancar dan sesuai ekspektasi.
        </p>

        <div className="process-timeline">
          {processData.map((item, index) => (
            <div key={index} className="process-step">
              <div className="process-step-number">{item.number}</div>
              <div className="process-step-content">
                <h3 className="process-step-title">{item.title}</h3>
                <p className="process-step-desc">{item.description}</p>
              </div>
              {index < processData.length - 1 && (
                <div className="process-step-line" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCard;
