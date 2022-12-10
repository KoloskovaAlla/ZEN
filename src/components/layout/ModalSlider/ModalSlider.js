import {useContext} from 'react'
import PreviewContext from 'contexts/PreviewContext'
import Description from './components/Description'
import Slider from './components/Slider'
import classes from './ModalSlider.module.scss'

const ModalSlider = () => {
  const {setIsDarkClicked} = useContext(PreviewContext)

  const handleModalSliderClick = () => {  
    setIsDarkClicked(true)
  }

  return (
    <div onClick={handleModalSliderClick} className={classes.modalSlider}>
      <Description />
      <Slider />
    </div >
  )
}

export default ModalSlider