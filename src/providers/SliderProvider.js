import {useState} from 'react'
import SliderContext from '../contexts/SliderContext'

const SliderProvider = ({children}) => {
  const [slides, setSlides] = useState([])
  const [slideDescription, setSlideDescription] = useState(null)

  const value = {
    slides, 
    setSlides,
    slideDescription,
    setSlideDescription
  } 

  return (
    <SliderContext.Provider value={value}>
      {children}
    </SliderContext.Provider>
  )
}

export default SliderProvider


