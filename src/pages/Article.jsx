import { useParams, Link } from 'react-router-dom'
import articles from '../data/articles'

function Article() {
  const { id } = useParams()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
        <p style={{ fontSize: '3rem' }}>😕</p>
        <h2>Article non trouvé</h2>
        <Link to="/" style={{ color: '#E91E8C' }}>Retour à l'accueil</Link>
      </div>
    )
  }

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>

      {/* Header article */}
      <div style={{
        background: 'linear-gradient(135deg, #E91E8C, #6C3FC5)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{article.emoji}</div>
        <span style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '4px 14px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          marginBottom: '1rem',
          display: 'inline-block'
        }}>
          {article.categorie}
        </span>
        <h1 style={{ fontSize: '2rem', margin: '0.75rem 0', lineHeight: '1.3' }}>
          {article.titre}
        </h1>
        <p style={{ opacity: 0.85, fontSize: '0.9rem' }}>{article.date}</p>
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#444'
          }}>
            {article.contenu}
          </p>
        </div>

        {/* Navigation entre articles */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{
            color: '#E91E8C',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '0.95rem'
          }}>
            ← Retour aux articles
          </Link>

          {article.id < articles.length && (
            <Link to={`/article/${article.id + 1}`} style={{
              color: '#E91E8C',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.95rem'
            }}>
              Article suivant →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Article