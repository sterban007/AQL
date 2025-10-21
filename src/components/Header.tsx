import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isArabic, toggleLanguage, t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      navigate('/')
      setTimeout(() => {
        const advantageSection = document.querySelector('.animated-bg-section')
        if (advantageSection) {
          advantageSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const advantageSection = document.querySelector('.animated-bg-section')
      if (advantageSection) {
        advantageSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <Link to="/" className="logo">AQL</Link>
          <div className="nav-container">
            {/* Desktop Navigation - visible on larger screens */}
            <nav className="nav-desktop">
              <a href="#about" onClick={handleAboutClick}>
                {t('nav.about') || 'About'}
              </a>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                {t('nav.services')}
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </Link>
            </nav>

            {/* Language Toggle with Flags */}
            <button
              className="language-toggle-flag"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {isArabic ? (
                // US Flag
                <img
                  src="/American-Flag-Emoji-removebg-preview.png"
                  alt="US Flag"
                  className="flag-icon"
                />
              ) : (
                // Saudi Flag
                <img
                  src="/saudi-removebg-preview.png"
                  alt="Saudi Flag"
                  className="flag-icon"
                />
              )}
            </button>

            {/* Mobile/Hamburger Navigation - slides in from left */}
            <nav className={`nav-mobile ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="#about" onClick={handleAboutClick}>
                {t('nav.about') || 'About'}
              </a>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                {t('nav.services')}
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header