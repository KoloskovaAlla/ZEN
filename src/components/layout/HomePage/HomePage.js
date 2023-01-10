import {useState, useEffect, useContext} from 'react'
import Preloader from '../Preloader'
import Header from '../Header'
import SectionBase from '../SectionBase'
import Cashback from '../Cashback'
import Clients from '../Cllients/Clients'
import Modal from '../Modal'
import Footer from '../Footer'
import ModalSlider from '../ModalSlider'
import Chatbot from '../Chatbot'
import ThemeContext from 'contexts/ThemeContext'
import LangContext from 'contexts/LangContext'

const HomePage = () => {
  const {theme} = useContext(ThemeContext)
  const {lang} = useContext(LangContext)
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch()
  }, [lang])
  return (
    <div className={`app ${theme}`}>
      {!data && <Preloader />}
      {/* {data && <Progress />} */}
      {data?.header && <Header data={data.header} />}
      {data?.download && <SectionBase data={data.download} />}
      {data?.warranty && <SectionBase data={data.warranty} reverse />}
      {data?.care && <SectionBase data={data.care} />}
      {data?.cashback && <Cashback data={data.cashback} />}
      {data?.clients && <Clients data={data.clients} />}
      {data?.modal && <Modal data={data.modal} />}
      {data?.footer && <Footer data={data.footer} />}

      {/* {previewDetails && <ModalSlider />} */}
      {data?.chatBot && <Chatbot data={data.chatBot} />}
    </div>
  )
}

export default HomePage
