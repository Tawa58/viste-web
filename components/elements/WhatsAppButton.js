import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+263712345678'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hello! I would like to know more about VISTEM Academy.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25d366',
        color: 'white',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '2px 2px 3px #999',
        zIndex: 1000,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.backgroundColor = '#128c7e';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.backgroundColor = '#25d366';
      }}
    >
      <i className="fab fa-whatsapp" style={{fontSize: '32px'}}></i>
    </div>
  );
};

export default WhatsAppButton;