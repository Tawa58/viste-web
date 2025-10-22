 import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+2630789984774'; // Updated phone number
  const message = 'Hello! I would like to know more about VISTE SENIOR ACADEMY - Visionary Institute of Science and Technology.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25d366',
        color: '#fff',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#128c7e';
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#25d366';
        e.target.style.transform = 'scale(1)';
      }}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;