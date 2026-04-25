import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      background: '#E91E8C',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0,0,0,0.15)'
    }}>
      <Link to="/" style={{
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.3rem'
      }}>
        Rebecca Blog
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem' }}>
          Accueil
        </Link>
        <Link to="/article/1" style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem' }}>
          Articles
        </Link>
      </div>
    </nav>
  )
}

export default Navbar