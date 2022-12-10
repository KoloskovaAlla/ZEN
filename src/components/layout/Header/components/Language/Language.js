import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { useEffect, useContext } from 'react'
import LangContext from 'contexts/LangContext'
// import {classNames} from 'utils/helpers'
import './Language.scss'

const Language = ({ languages }) => {
  const { lang, toggleLang } = useContext(LangContext)

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const className = 'language'

  const handleLanguageChange = (event) => {
    const langValue = event.currentTarget.value
    toggleLang(langValue)
  }

  return (
    <label className={className}>
      <select
        value={localStorage.getItem('lang')}
        onChange={handleLanguageChange}
      >
        {languages.map((language) =>
          <option value={language.value} key={language.value}>
            {language.text && language.text}
          </option>
        )}
      </select>

      <ArrowIcon />
    </label>
  )
}

export default Language