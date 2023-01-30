import { useContext } from 'react';
import ModalContext from '../../../../../contexts/ModalContext';
import { ReactComponent as CloseIcon } from './components/close.svg';
import classes from './Close.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalActive } from 'reducers/modalSlice';

const Close = ({ parentClassName }) => {
  // const { setIsModalActive } = useContext(ModalContext);
  const dispatch = useDispatch()

  const handleCloseClick = () => {
     dispatch(setIsModalActive(false));
  };

  return (
    <button onClick={handleCloseClick} className={classes.close}>
      <CloseIcon />
    </button>
  );
};

export default Close;
