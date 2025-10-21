import { useLanguage } from '../contexts/LanguageContext'

function Services() {
  const { t } = useLanguage()

  return (
    <>
      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="services-page-title">{t('services.title')}</h1>
          <p className="services-page-subtitle">{t('services.subtitle')}</p>
          <p className="services-page-explore">{t('services.explore')}</p>

          <div className="services-intro-new">
            <h2 className="services-intro-heading">{t('services.intro.title')}</h2>
            <p className="services-intro-description">
              {t('services.intro.description')}
            </p>
          </div>
        </div>
        {/* Blue gradient background */}
        <div className="services-gradient-bg"></div>
      </section>

      {/* Service Cards Section */}
      <section className="service-cards-section">
          <div className="service-cards-grid-new">
            {/* Consulting Card */}
            <div className="service-card-new consulting-card-new">
              <h3>{t('services.consulting.title')}</h3>
              <p className="card-description-new">{t('services.consulting.description')}</p>
            </div>

            {/* AI Solutions Card */}
            <div className="service-card-new ai-card-new">
              <h3>{t('services.ai.title')}</h3>
              <p className="card-description-new">{t('services.ai.description')}</p>
            </div>

            {/* Cloud Solutions Card */}
            <div className="service-card-new cloud-card-new">
              <h3>{t('services.cloud.title')}</h3>
              <p className="card-description-new">{t('services.cloud.description')}</p>
            </div>
          </div>
      </section>

      {/* Process Image Section */}
      <section className="process-image-section">
        <div className="container">
          <img
            src="/WhatsApp Image 2025-10-11 at 14.13.55_a89017e7.jpg"
            alt="Process Diagram"
            className="process-image"
          />
        </div>
      </section>
    </>
  )
}

export default Services