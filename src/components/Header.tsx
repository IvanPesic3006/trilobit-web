import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import type { Language } from '../i18n/translations.ts'
import './Header.css'

function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="header">
      <div className="header__brand">
        <img src="/logo.png" alt="Trilobit logo" className="header__logo" />
        <Link to="/" className="header__name">Trilobit</Link>
      </div>

      <div className="header__right">
        <nav className="header__nav">
          <Link to="/">{t.nav.home}</Link>
          <Link to="/usluge">{t.nav.services}</Link>
          <Link to="/o-nama">{t.nav.about}</Link>
          <Link to="/kontakt">{t.nav.contact}</Link>
        </nav>

        <div className="header__lang">
          {(['hr', 'en'] as Language[]).map((lang) => (
            <button
              key={lang}
              type="button"
              className={
                language === lang
                  ? 'header__lang-btn header__lang-btn--active'
                  : 'header__lang-btn'
              }
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
