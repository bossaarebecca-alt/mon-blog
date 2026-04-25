import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Accueil from './pages/Accueil'
import Article from './pages/Article'

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App