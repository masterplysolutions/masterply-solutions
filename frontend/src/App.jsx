import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComponentLibrary } from './pages/ComponentLibrary'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Applications } from './pages/Applications'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { BlogList } from './pages/BlogList'
import { BlogPost } from './pages/BlogPost'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfUse } from './pages/TermsOfUse'
import { CookiePolicy } from './pages/CookiePolicy'
import { CookieBanner } from './components/ui/CookieBanner'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/docs" element={<ComponentLibrary />} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/aplicacoes" element={<Applications />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/politica-de-cookies" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}

export default App


