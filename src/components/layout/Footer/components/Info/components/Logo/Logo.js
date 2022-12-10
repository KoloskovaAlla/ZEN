import { ReactComponent as LogoIcon } from './assets/logo.svg'
import classes from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={classes.logo}>
      <LogoIcon />
    </div>
  )
}

export default Logo