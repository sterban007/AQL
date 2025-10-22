import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../lib/supabase'

interface FormData {
  firstName: string
  lastName: string
  email: string
  position: string
  country: string
  city: string
}

function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    country: '',
    city: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    // Debug: Log form data and Supabase client status
    console.log('Form data being submitted:', {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      position: formData.position || null,
      country: formData.country,
      city: formData.city
    })
    
    try {
      // Insert data into Supabase table named 'contacts'
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            position: formData.position || null,
            country: formData.country,
            city: formData.city
            // Let Supabase set created_at automatically
          }
        ])
        // Remove .select() since public users don't have SELECT permission

      if (error) {
        throw error
      }

      setSubmitStatus({
        type: 'success',
        message: t('contact.successMessage') || 'Thank you! Your information has been submitted successfully.'
      })

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        country: '',
        city: ''
      })
    } catch (error: any) {
      console.error('Form submission error:', error)
      
      // Log detailed error information
      console.log('Error details:', {
        message: error?.message,
        code: error?.code,
        details: error?.details,
        hint: error?.hint,
        status: error?.status
      })

      // Show specific error message for debugging
      const errorMessage = error?.message || error?.error_description || error?.toString() || 'Unknown error'

      setSubmitStatus({
        type: 'error',
        message: `${t('contact.errorMessage')} (${errorMessage})`
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-page-new">
      <div className="contact-layout-new">
        <div className="contact-left-section">
          <h1 className="contact-title-new">{t('contact.title')}</h1>

          <div className="contact-info">
            <p className="location-info">{t('contact.location')}</p>
            <p className="phone-info">{t('contact.phone')}</p>
          </div>

          <div className="contact-form-wrapper">
            <h2 className="form-title">{t('contact.ask')}</h2>
            <h3 className="form-subtitle">{t('contact.request')}</h3>

            {submitStatus.type && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <form className="contact-form-grid" onSubmit={handleSubmit}>
              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="firstName">{t('contact.firstName')}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">{t('contact.lastName')}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">{t('contact.position')}</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="country">{t('contact.country')}</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">{t('contact.city')}</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (t('contact.submitting') || 'Submitting...') : (t('contact.submit') || 'Submit')}
                </button>
                <a
                  href="https://wa.me/966533636592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="whatsapp-icon"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {t('contact.whatsapp') || 'WhatsApp'}
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-right-section">
          <div className="contact-image-frame">
            <img
              src="/pexels-hedigt-33672511.jpg"
              alt="Contact"
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
