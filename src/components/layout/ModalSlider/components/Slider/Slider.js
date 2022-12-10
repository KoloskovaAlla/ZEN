import {useRef, useEffect, useContext, useState} from 'react'
import PreviewContext from 'contexts/PreviewContext'
import classes from './Slider.module.scss'
import SliderContext from 'contexts/SliderContext'
import {ReactComponent as ArrowLeft} from './assets/arrowleft.svg'
import {ReactComponent as ArrowRight} from './assets/arrowright.svg'
import {classNames} from 'utils/helpers'

const Slider = () => {
  const {isDarkClicked} = useContext(PreviewContext)
  const sliderRef = useRef(null)
  const slidesRef = useRef(null)
  const { setSlideDescription} = useContext(SliderContext)

  const {previewDetails, setPreviewDetails} = useContext(PreviewContext)

  const [resize, setResize] = useState(false)

  const [currentSlideId, setCurrentSlideId] = useState(previewDetails.id)

  const handleWindowResize = () => {
    resize ? setResize(false) : setResize(true)
  }

  const throttle = (func, delay) => {
    let timer = null

    return () => {
      if (timer) return

      timer = setTimeout(() => {
        func()
        clearTimeout(timer)
        timer = null
      }, delay)
    }
  }

  const optimizedHandler = throttle(handleWindowResize, 250)
  window.addEventListener('resize', optimizedHandler)

  const {slides} = useContext(SliderContext)

  useEffect(() => {
    const slider = sliderRef.current

    const topSlider = window.screen.height / 2 - previewDetails.height / 2
    const leftSlider = window.screen.width / 2 - previewDetails.width / 2

    slider.style.position = 'fixed'

    slider.style.width = `${previewDetails.width}px`
    slider.style.height = `${previewDetails.height}px`

    slider.style.top = `${previewDetails.y}px`
    slider.style.left = `${previewDetails.x}px`

    setTimeout(() => {
      slider.style.top = `${topSlider}px`
      slider.style.left = `${leftSlider}px`
    }, 300)

  
  }, [previewDetails, resize])

  useEffect(() => {
    if (!sliderRef.current) return

    const {width, description} = previewDetails

    const slideDescription = {
      width,
      text: description
    }
    setSlideDescription(slideDescription)

    slidesRef.current.style.width = `${width * slides.length}px`
    slidesRef.current.style.left = `-${width * (currentSlideId - 1)}px`

  }, [previewDetails, resize, currentSlideId, slides, setSlideDescription])

  const handleCloseClick = () => {
    sliderRef.current.style.top = `${previewDetails.y}px`
    sliderRef.current.style.left = `${previewDetails.x}px`

    setTimeout(() => {
      setPreviewDetails(null)
    }, 800)
  }

  if (isDarkClicked === true) {
    sliderRef.current.style.top = `${previewDetails.y}px`
    sliderRef.current.style.left = `${previewDetails.x}px`

    setTimeout(() => {
      setPreviewDetails(null)
    }, 800)
    
  }

  const handlePrevClick = () => {
    setCurrentSlideId(currentSlideId - 1)
  }

  const handleNextClick = () => {
    setCurrentSlideId(currentSlideId + 1)
  }

  const classNamePrev = classNames(classes.prev, {
    [classes.disabled]: currentSlideId === 1
  }, [])

  const classNameNext = classNames(classes.next, {
    [classes.disabled]: currentSlideId === slides.length
  }, [])

  const handleSliderClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div onClick={handleSliderClick} ref={sliderRef} className={classes.slider}>
      <button onClick={handleCloseClick} className={classes.close} type="button">X</button>
      <div ref={slidesRef} className={classes.slides}>

        {slides.map((slide) =>
          <img
            key={slide.id}
            src={slide.source && slide.source}
            alt={slide.alternate && slide.alternate}
            width={`${previewDetails.width}px`}
            height={`${previewDetails.height}px`}
          />
        )}
      </div>
      <button disabled={currentSlideId === 1} onClick={handlePrevClick} className={classNamePrev} type="button">
        <ArrowLeft />
      </button>
      <button disabled={currentSlideId === slides.length} onClick={handleNextClick} className={classNameNext} type="button">
        <ArrowRight />
      </button>
      <p className={classes.pagination}>{`${currentSlideId} / ${slides.length}`}</p>
    </div>
  )
}

export default Slider