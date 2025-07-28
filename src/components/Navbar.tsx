import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>TaraG</h2>
      <div style={styles.links} className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/docs" className="navbar-link">Docs</Link>
        <Link to="/terms" className="navbar-link">Terms</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/application" className="navbar-link">Application</Link>
      </div>

      <div style={styles.download} className="navbar-download">

        <div className="burger-menu" onClick={() => setMenuOpen(o => !o)}>
          <div className={`bar${menuOpen ? ' open' : ''}`}></div>
          <div className={`bar${menuOpen ? ' open' : ''}`}></div>
          <div className={`bar${menuOpen ? ' open' : ''}`}></div>
        </div>

        <div className={`dropdown-menu${menuOpen ? ' show' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/docs" onClick={() => setMenuOpen(false)}>Docs</Link>
          <Link to="/terms" onClick={() => setMenuOpen(false)}>Terms</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/application" onClick={() => setMenuOpen(false)}>Application</Link>
        </div>
        <Link to="/download" style={styles.link}>Get App</Link>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: 'fixed',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    width: '80%',
    maxWidth: '100vw',
    margin: 0,
    zIndex: 1000,
    borderRadius: 10,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    height: 35,
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
  },
  links: {
    display: 'flex',
    gap: 50,
  },
  link: {
    textDecoration: 'none',
    fontSize: '1rem',
    backgroundColor: '#000',
    width: 120,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    color: '#fff',
  },
  download: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
};