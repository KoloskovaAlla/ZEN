// import LogoIcon from './components/LogoIcon'
import { scrollToTop } from '../../../../../../../utils/helpers'
import { ReactComponent as LogoIcon } from './assets/logo.svg'
import classes from './Logo.module.scss'

const Logo = () => {
  const handleLogoClick = () => {
    scrollToTop()
  }

  return (
    <div
      onClick={handleLogoClick}
      className={classes.logo}
    >
      <LogoIcon />
    </div>
  )
}

export default Logo