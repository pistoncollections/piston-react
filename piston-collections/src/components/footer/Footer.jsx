import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-auto bg-primary' style={{
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto' // Helps keep it at the bottom if using Flexbox
    }}>
      <div className="footer-content">
        <p className=''>&copy; {new Date().getFullYear()} Piston Collections</p>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <li><a href="/about" style={{ color: 'white' }}>About</a></li>
          <li><a href="/contact" style={{ color: 'white' }}>Contact</a></li>
          <li><a href="/privacy" style={{ color: 'white' }}>Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;