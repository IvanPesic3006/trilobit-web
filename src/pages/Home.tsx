import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.tsx'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import './Home.css'

function Home() {
  const { t } = useLanguage()

  return (
    <div className="home">
      <section className="hero">
        <h1>{t.home.heroTitle}</h1>
        <p>{t.home.heroText}</p>
      </section>

      <section className="services">
        <h2>{t.home.servicesTitle}</h2>
        <div className="services__grid">
          <ServiceCard
            title={t.home.service1Title}
            description={t.home.service1Desc}
          />
          <ServiceCard
            title={t.home.service2Title}
            description={t.home.service2Desc}
          />
          <ServiceCard
            title={t.home.service3Title}
            description={t.home.service3Desc}
          />
        </div>
      </section>

      <section className="why">
        <h2>{t.home.whyTitle}</h2>
        <ul className="why__list">
          <li>{t.home.why1}</li>
          <li>{t.home.why2}</li>
          <li>{t.home.why3}</li>
        </ul>
      </section>

      <section className="cta">
        <h2>{t.home.ctaTitle}</h2>
        <p>{t.home.ctaText}</p>
        <Link to="/kontakt" className="cta__button">
          {t.home.ctaButton}
        </Link>
      </section>
    </div>
  )
}

export default Home
