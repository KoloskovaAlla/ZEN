import { useContext } from 'react'
import ThemeContext from 'contexts/ThemeContext'
import { ReactComponent as IconMoon } from './assets/moonicon.svg'
import { ReactComponent as IconSun } from './assets/sunicon.svg'
import './Theme.scss'

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const className = 'theme'

  return (
    <button onClick={toggleTheme} className={className}>
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  )
}

export default Theme