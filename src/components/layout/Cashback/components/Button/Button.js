import { useContext } from 'react'
import OrderContext from 'contexts/ModalContext'
import classes from './Button.module.scss'

const Button = ({ buttonText }) => {
  const { setIsModalActive } = useContext(OrderContext) 

  const handleOrderClick = () => {
    setIsModalActive(true)
  }

  return (
    <button
      onClick={handleOrderClick}
      className={classes.button}
      type="button"
    >
      {buttonText && buttonText}
    </button>
  )
}

export default Button