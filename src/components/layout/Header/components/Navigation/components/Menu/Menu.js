import MenuItem from './components/MenuItem/MenuItem'
import { classNames } from 'utils/helpers'
import { useContext } from 'react'
import ThemeContext from 'contexts/ThemeContext'
import classes from './Menu.module.scss'

const Menu = ({ data, parentClassName, isMenuActive, setIsMenuActive }) => {
  const { theme } = useContext(ThemeContext)

  const classNameMenu = classNames(classes.menu, {
    [classes.active]: isMenuActive,
    'dark': theme === 'dark'
  }, [])

  return (
    <ul className={classNameMenu} theme={theme} >
      {data.menuItems.length > 0 &&
        data.menuItems.map((menuItem, index) =>
          <MenuItem
            menuItem={menuItem}
            parentClassName={parentClassName}
            key={index}
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
          />
        )}
    </ul>
  )
}

export default Menu