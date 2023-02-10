// import LogoIcon from './components/LogoIcon'
import { scrollToTop } from '../../../../../../../utils/helpers'
import { ReactComponent as LogoIcon } from './assets/logo.svg'
import classes from './Logo.module.scss'
import { Link } from 'react-router-dom'

const Logo = () => {
  const handleLogoClick = () => {
    scrollToTop()
  }

  return (
    <Link to='/' onClick={handleLogoClick} className={classes.logo}>      
      <LogoIcon />
    </Link>
  );
}

export default Logo