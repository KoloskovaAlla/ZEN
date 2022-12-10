import LangContext from '../contexts/LangContext'
import { useState, useEffect } from 'react'

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') ?? 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLang = () => {
    lang === 'en'
      ? setLang('ru')
      : setLang('en')
  }

  const value = {
    lang,
    toggleLang
  }

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  )
}

export default LangProvider