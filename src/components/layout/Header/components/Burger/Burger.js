import {classNames} from 'utils/helpers'
import './Burger.scss'

const Burger = ({ isMenuActive, setIsMenuActive}) => { 
  const className = classNames(`burger`, {active: isMenuActive,}, []) 

  const handleBurgerClick = () => {
    isMenuActive 
      ? setIsMenuActive(false)
      : setIsMenuActive(true)
  }

  return (
    <button
      onClick={handleBurgerClick}
      className={className}
      type="button"
    >
      <span></span>
    </button>
  )
}

export default Burger
// const className = classNames('header_burger', { active: isMenuActive, disabled: true, test1: true, test2: false }, ['hovered', 'bordered', 'ml-10'])