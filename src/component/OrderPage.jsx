import React, { useState } from 'react';
import './OrderPage.css'; // CSS untuk tampilan modern

const OrderPage = ({ serviceName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}! Pesanan untuk "${serviceName}" telah dikirim.`);
    setFormData({ name: '', email: '', details: '' });
  };

  return (
    <div className="order-container">
      <h1>Order {serviceName}</h1>
      <p>Isi formulir berikut untuk memesan layanan.</p>

      <form className="order-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nama Anda"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Anda"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="details"
          placeholder="Detail pesanan"
          value={formData.details}
          onChange={handleChange}
          required
        />
        <button type="submit">Kirim Pesanan</button>
      </form>
    </div>
  );
};

export default OrderPage;
