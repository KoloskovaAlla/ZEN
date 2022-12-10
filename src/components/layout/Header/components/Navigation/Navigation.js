import Logo from './components/Logo'
import Menu from './components/Menu'
// import './Navigation.scss'
import classes from './Navigation.module.scss'

const Navigation = ({ data, className, theme, isMenuActive, setIsMenuActive }) => {
  // const className = 'navigation'

  return (
    <nav className={classes.navigation}>
      <Logo />

      <Menu
        data={data}     
        isMenuActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}
      />
    </nav>
  )
}

export default Navigation 