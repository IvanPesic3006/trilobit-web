import './Footer.css'
import { useLanguage } from '../i18n/LanguageContext.tsx'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <img src="/bijelilogo.png" alt="Trilobit" className="footer__logo" />
      <p>Trilobit &copy; 2026. {t.footer.rights}</p>
      <p className="footer__tagline">{t.footer.tagline}</p>
    </footer>
  )
}

export default Footer
