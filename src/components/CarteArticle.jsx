import { Link } from 'react-router-dom'

function CarteArticle({ article }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)'
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{article.emoji}</div>
      <span style={{
        background: '#FCE8F3',
        color: '#E91E8C',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        padding: '3px 10px',
        borderRadius: '20px',
        marginBottom: '0.75rem',
        display: 'inline-block'
      }}>
        {article.categorie}
      </span>
      <h2 style={{
        fontSize: '1.1rem',
        color: '#333',
        margin: '0.5rem 0',
        lineHeight: '1.4'
      }}>
        {article.titre}
      </h2>
      <p style={{
        color: '#888',
        fontSize: '0.9rem',
        lineHeight: '1.6',
        margin: '0 0 1rem'
      }}>
        {article.resume}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ color: '#aaa', fontSize: '0.8rem' }}>{article.date}</span>
        <Link to={`/article/${article.id}`} style={{
          color: '#E91E8C',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          Lire la suite →
        </Link>
      </div>
    </div>
  )
}

export default CarteArticle