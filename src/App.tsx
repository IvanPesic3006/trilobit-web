import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="app-layout">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/usluge" element={<Services />} />
              <Route path="/o-nama" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
