import '../styles/RunningText.css';

const RunningText = () => {
  const items = [
    'Website Development',
    'UI/UX Design',
    'Poster Digital',
    'Brand Identity',
    'Responsive Design',
    'Frontend Development',
  ];

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="running-text-section">
      <div className="running-text-track">
        <div className="running-text-inner">
          {repeatedItems.map((item, i) => (
            <span key={i} className="running-text-item">
              {item}
              <span className="running-text-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RunningText;
