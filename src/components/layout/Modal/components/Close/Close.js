import { useContext } from 'react';
import ModalContext from '../../../../../contexts/ModalContext';
import { ReactComponent as CloseIcon } from './components/close.svg';
import classes from './Close.module.scss';

const Close = ({ parentClassName }) => {
  const { setIsModalActive } = useContext(ModalContext);

  const handleCloseClick = () => {
    setIsModalActive(false);
  };

  return (
    <button onClick={handleCloseClick} className={classes.close}>
      <CloseIcon />
    </button>
  );
};

export default Close;
