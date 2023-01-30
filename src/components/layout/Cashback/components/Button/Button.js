import { useContext } from 'react'
// import OrderContext from 'contexts/ModalContext'
import classes from './Button.module.scss'
import { useDispatch } from 'react-redux'
import { setIsModalActive } from 'reducers/modalSlice'

const Button = ({ buttonText }) => {
  const dispatch = useDispatch()
  // const { setIsModalActive } = useContext(OrderContext) 

  const handleOrderClick = () => {
    dispatch(setIsModalActive(true))
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