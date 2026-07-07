import { useLanguage } from '../i18n/LanguageContext.tsx'
import './Page.css'

function Services() {
  const { t } = useLanguage()

  return (
    <div className="page">
      <h1>{t.services.title}</h1>
      <p className="page__intro">{t.services.intro}</p>

      <article className="service-detail">
        <h2>{t.services.s1Title}</h2>
        <p>{t.services.s1Text}</p>
        <ul>
          <li>{t.services.s1Item1}</li>
          <li>{t.services.s1Item2}</li>
          <li>{t.services.s1Item3}</li>
        </ul>
      </article>

      <article className="service-detail">
        <h2>{t.services.s2Title}</h2>
        <p>{t.services.s2Text}</p>
        <ul>
          <li>{t.services.s2Item1}</li>
          <li>{t.services.s2Item2}</li>
          <li>{t.services.s2Item3}</li>
        </ul>
      </article>

      <article className="service-detail">
        <h2>{t.services.s3Title}</h2>
        <p>{t.services.s3Text}</p>
        <ul>
          <li>{t.services.s3Item1}</li>
          <li>{t.services.s3Item2}</li>
          <li>{t.services.s3Item3}</li>
        </ul>
      </article>
    </div>
  )
}

export default Services
