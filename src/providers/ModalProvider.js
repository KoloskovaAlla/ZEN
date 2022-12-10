import { useState } from 'react'
import ModalContext from '../contexts/ModalContext'


const OrderProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false) 

  const value = {
    isModalActive,
    setIsModalActive
  }  

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export default OrderProvider