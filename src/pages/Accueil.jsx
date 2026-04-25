import { useState } from 'react'
import CarteArticle from '../components/CarteArticle'
import articles from '../data/articles'

function Accueil() {
  const [recherche, setRecherche] = useState('')
  const [categorieActive, setCategorieActive] = useState('Tous')

  const categories = ['Tous', 'Git', 'HTML/CSS', 'JavaScript', 'React', 'Déploiement']

  const articlesFiltres = articles.filter(article => {
    const correspondRecherche = article.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      article.resume.toLowerCase().includes(recherche.toLowerCase())
    const correspondCategorie = categorieActive === 'Tous' || article.categorie === categorieActive
    return correspondRecherche && correspondCategorie
  })

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #E91E8C, #6C3FC5)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem' }}>Mon Blog Dev</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, margin: '0 0 2rem' }}>
          Mon parcours d'apprentissage en développement web
        </p>
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={recherche}
          onChange={e => setRecherche(e.target.value)}
          style={{
            padding: '12px 20px',
            borderRadius: '25px',
            border: 'none',
            width: '100%',
            maxWidth: '400px',
            fontSize: '0.95rem',
            outline: 'none'
          }}
        />
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Filtres categories */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategorieActive(cat)}
              style={{
                padding: '7px 18px',
                borderRadius: '20px',
                border: 'none',
                background: categorieActive === cat ? '#E91E8C' : 'white',
                color: categorieActive === cat ? 'white' : '#666',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: categorieActive === cat ? 'bold' : 'normal',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compteur */}
        <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          {articlesFiltres.length} article{articlesFiltres.length > 1 ? 's' : ''} trouvé{articlesFiltres.length > 1 ? 's' : ''}
        </p>

        {/* Grille articles */}
        {articlesFiltres.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
            <p style={{ fontSize: '2rem' }}>😕</p>
            <p>Aucun article trouvé pour cette recherche.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {articlesFiltres.map(article => (
              <CarteArticle key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Accueil