import { useLanguage } from '../contexts/LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <section className="about-page">
      <div className="container">
        <div className="page-content">
          <h2 className="page-title">{t('about.title')}</h2>
          <div className="about-content">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About