import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

function Home() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const slides = [
    {
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      background: "black",
      hasGradient: false
    },
    {
      title: t('home.slide2.title'),
      subtitle: t('home.slide2.subtitle'),
      background: "white",
      hasGradient: true
    },
    {
      title: t('home.slide3.title'),
      subtitle: t('home.slide3.subtitle'),
      background: "white",
      hasGradient: false
    }
  ]

  return (
    <>
      {/* Section 1: Hero Section with Slider (EPAM-inspired) */}
      <section className={`hero-new slide-${currentSlide}`}>
        {/* Video Background for first slide */}
        {currentSlide === 0 && (
          <video
            className="hero-video-background"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/8093592-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
        )}

        {/* Video background for slide 2 */}
        {currentSlide === 1 && (
          <video
            className="hero-video-background full-width"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        )}

        {/* Video background for slide 3 */}
        {currentSlide === 2 && (
          <video
            className="hero-video-background full-width"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video3.mp4" type="video/mp4" />
          </video>
        )}

        <div className="hero-content-new">
          <h1 className="hero-title-new">
            {slides[currentSlide].title}
          </h1>
          {slides[currentSlide].subtitle && (
            <p className="hero-subtitle-new">
              {slides[currentSlide].subtitle}
            </p>
          )}
        </div>

        {/* Slider Controls */}
        <div className="slider-controls-new">
          <button
            className="slider-btn-new"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <span className="arrow-left">←</span>
          </button>
          <button
            className="slider-btn-new"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <span className="arrow-right">→</span>
          </button>
          <div className="slider-counter-new">
            <span className="current-slide">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="slide-separator">/</span>
            <span className="total-slides">{String(totalSlides).padStart(2, '0')}</span>
          </div>
        </div>
      </section>

      {/* Section 2: Core AI Offerings */}
      <section className="challenge-mission-section">
        <div className="challenge-content">
          <h2 className="challenge-title">{t('home.offerings.title')}</h2>
          <p className="challenge-subtitle">{t('home.offerings.subtitle')}</p>
          <p className="challenge-tagline">{t('home.offerings.tagline')}</p>
        </div>
        <div className="challenge-gradient"></div>
      </section>

      {/* Section 3: AI Services Boxes */}
      <section className="apple-inspired-section">
        <div className="container-full">
          <div className="flexible-boxes-static">
            <div className="flex-box-new box-blue">
              <h3>{t('home.aiagents.title')}</h3>
              <p className="box-description">{t('home.aiagents.description')}</p>
            </div>
            <div className="flex-box-new box-white">
              <h3>{t('home.aisolutions.title')}</h3>
              <p className="box-description">{t('home.aisolutions.description')}</p>
            </div>
            <div className="flex-box-new box-teal">
              <h3>{t('home.aiconsulting.title')}</h3>
              <p className="box-description">{t('home.aiconsulting.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Aql Advantage */}
      <section id="about" className="animated-bg-section">
        <video
          className="why-section-video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/12275352-hd_1920_1028_60fps.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <h3 className="section-title">{t('home.advantage.title')}</h3>
          <p className="section-description">{t('home.advantage.description')}</p>
        </div>
      </section>

      {/* Section 5: Company Logos Marquee */}
      <section className="logos-marquee-section">
        <div className="container">
          <h3 className="marquee-title">
            {t('home.partners.title')}<br />
            {t('home.partners.subtitle')}
          </h3>
          <div className="marquee-wrapper">
            <div className="marquee-content">
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg" alt="Adobe" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" alt="ServiceNow" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg" alt="Adobe" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" alt="ServiceNow" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
              </div>
              <div className="marquee-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home