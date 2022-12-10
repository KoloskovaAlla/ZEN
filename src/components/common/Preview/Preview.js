import {useContext, useEffect} from 'react'
import SliderContext from 'contexts/SliderContext'
import PreviewContext from 'contexts/PreviewContext'
import classes from './Preview.module.scss'

const Preview = ({imageData}) => {

  const {setIsDarkClicked} = useContext(PreviewContext)

  // const slide = {
  //   id: imageData.id,
  //   source: imageData.source,
  //   description: imageData.alternate
  // }

  const {setSlides} = useContext(SliderContext)


  useEffect(() => {
    setSlides((slides) =>  [...slides, imageData])
  }, [imageData, setSlides])

  const {setPreviewDetails} = useContext(PreviewContext)

  const handlePreviewClick = (event) => {
    setIsDarkClicked(false)
    const details = event.currentTarget.getBoundingClientRect();  

    const x = details.left
    const width = details.width

    const y = details.top
    const height = details.height

    const description = imageData.alternate  
    const id = imageData.id  

    setPreviewDetails({
      x,
      y,
      width,
      height,  
      description,
      id  
    })

  }

  return (
    <button onClick={handlePreviewClick} className={classes.preview} type='button'>
      <img
        src={imageData?.source && imageData.source}
        alt={imageData?.alternate && imageData.alternate}
      />
    </button >
  )

}

export default Preview