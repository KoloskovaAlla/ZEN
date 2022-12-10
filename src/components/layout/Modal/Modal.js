import classes from './Modal.module.scss'
import Close from './components/Close'
import Title from './components/Title'
import Form from './components/Form'
import { classNames } from 'utils/helpers'
import { useContext, useState } from 'react'
import ModalContext from 'contexts/ModalContext'


const Modal = ({ data }) => {
  const { isModalActive, setIsModalActive } = useContext(ModalContext)

 
  const [isDataSent, setIsDataSent] = useState(false)
  // const className = 'modal'
  const { title, ...form } = data

  const classNameModal = classNames(classes.modal, {
    [classes.active]: isModalActive
  });

  const handleModalClick = () => {
    setIsModalActive(false)
  }

  const handleBodyClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div onClick={handleModalClick} className={classNameModal}>
      <div onClick={handleBodyClick} className={classes.body}>
        {isDataSent && <span>Данные отправлены успешно!</span>}

        {!isDataSent && <Close />}

        {title && !isDataSent && (
          <Title
            titleData={title}
          />
        )}

        {!isDataSent &&
          <Form
            isDataSent={isDataSent}
            setIsDataSent={setIsDataSent}
            form={form}
          />
        }
      </div>
    </div>
  )
}

export default Modal