import {useContext} from 'react'
import PreviewContext from 'contexts/PreviewContext'
import Description from './components/Description'
import Slider from './components/Slider'
import classes from './ModalSlider.module.scss'
import { setIsDarkClicked } from 'reducers/previewSlice'
import { useDispatch } from 'react-redux'

const ModalSlider = () => {
  // const {setIsDarkClicked} = useContext(PreviewContext)
  const dispatch = useDispatch()

  const handleModalSliderClick = () => {  
    dispatch(setIsDarkClicked(true))
    console.log('test')
  }

  return (
    <div onClick={handleModalSliderClick} className={classes.modalSlider}>
      <Description />
      <Slider />
    </div >
  )
}

export default ModalSlider