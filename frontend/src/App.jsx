import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComponentLibrary } from './pages/ComponentLibrary'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Applications } from './pages/Applications'
import { BlogList } from './pages/BlogList'
import { BlogPost } from './pages/BlogPost'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/docs" element={<ComponentLibrary />} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/aplicacoes" element={<Applications />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


