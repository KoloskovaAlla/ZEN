import { useContext } from 'react';
// import OrderContext from 'contexts/ModalContext'
import classes from './Button.module.scss';
import { useDispatch } from 'react-redux';
import { setIsModalActive } from 'reducers/modalSlice';
import { Link } from 'react-router-dom';

const Button = ({ buttonText }) => {
  const dispatch = useDispatch();
  // const { setIsModalActive } = useContext(OrderContext)

  return (
    <Link className={classes.post} to='/posts'>
      <button className={classes.button} type='button'>
        {buttonText && buttonText}
      </button>
    </Link>
  );
};

export default Button;
