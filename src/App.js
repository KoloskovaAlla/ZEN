import { useState, useEffect, useContext } from 'react'
import { useDocumentTitle } from 'hooks'
import ThemeContext from './contexts/ThemeContext'
import LangContext from './contexts/LangContext'
import Header from './components/layout/Header'
import SectionBase from './components/layout/SectionBase'
import Cashback from './components/layout/Cashback'
import Clients from './components/layout/Cllients'
import Footer from './components/layout/Footer'
import Modal from './components/layout/Modal'
import Preloader from './components/layout/Preloader/Preloader'
import Progress from './components/layout/Progress'
import handleWindowScroll from './utils/handleWindowScroll'
// import Slider from './components/layout/Slider'
import PreviewContext from 'contexts/PreviewContext'
import ModalSlider from 'components/layout/ModalSlider'
import Chatbot from 'components/layout/Chatbot'

const App = () => {
  useDocumentTitle('ZEN | Home')
  const { theme } = useContext(ThemeContext)
  const { lang } = useContext(LangContext)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch()
  }, [lang])

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const { previewDetails } = useContext(PreviewContext)

  return (
    <div className={`app ${theme}`}>
      {!data && <Preloader />}
      {data && <Progress />}
      {data?.header && <Header data={data.header} />}
      {data?.download && <SectionBase data={data.download} />}
      {data?.warranty && <SectionBase data={data.warranty} reverse />}
      {data?.care && <SectionBase data={data.care} />}
      {data?.cashback && <Cashback data={data.cashback} />}
      {data?.clients && <Clients data={data.clients} />}
      {data?.modal && <Modal data={data.modal} />}
      {data?.footer && <Footer data={data.footer} />}
      {/* {previewDetails && <Slider />} */}
      {previewDetails && <ModalSlider />}
      {data?.chatBot && <Chatbot data={data.chatBot} />}
    </div>
  )
}

export default App