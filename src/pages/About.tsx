import './Page.css'
import { useLanguage } from '../i18n/LanguageContext.tsx'

function About() {
  const { t } = useLanguage()

  return (
    <div className="page">
      <h1>{t.about.title}</h1>
      <p className="page__intro">{t.about.intro}</p>

      <article className="service-detail">
        <h2>{t.about.missionTitle}</h2>
        <p>{t.about.missionText}</p>
      </article>

      <article className="service-detail">
        <h2>{t.about.equipmentTitle}</h2>
        <p>{t.about.equipmentText}</p>
        <ul>
          <li>{t.about.equipment1}</li>
          <li>{t.about.equipment2}</li>
          <li>{t.about.equipment3}</li>
        </ul>
      </article>
    </div>
  )
}

export default About
