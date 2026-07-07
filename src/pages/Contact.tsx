import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import './Contact.css'
import './Page.css'

const API_URL =
  import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api/contact'

function Contact() {
  const { language, t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      lang: language,
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(result.message || t.contact.errorMessage)
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage(t.contact.errorMessage)
    }
  }

  return (
    <div className="page">
      <h1>{t.contact.title}</h1>
      <p className="page__intro">{t.contact.intro}</p>

      <div className="page__contact-info">
        <p>
          <a href="https://www.trilobit.hr" target="_blank" rel="noreferrer">
            www.trilobit.hr
          </a>
        </p>
        <p>{t.contact.address}</p>
        <p>
          <a href="tel:+385993119557">+385 99 311 9557</a>
        </p>
        <p>
          <a href="mailto:info@trilobit.hr">info@trilobit.hr</a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          {t.contact.labelName}
          <input type="text" name="name" required minLength={2} />
        </label>

        <label>
          {t.contact.labelEmail}
          <input type="email" name="email" required />
        </label>

        <label>
          {t.contact.labelMessage}
          <textarea name="message" required minLength={10} />
        </label>

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.contact.sending : t.contact.submitButton}
        </button>

        {status === 'success' && (
          <p className="contact-form__message contact-form__message--success">
            {t.contact.successMessage}
          </p>
        )}

        {status === 'error' && (
          <p className="contact-form__message contact-form__message--error">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  )
}

export default Contact
