import { useState, useEffect, useContext } from 'react';
import Preloader from 'components/layout/Preloader';
import Header from 'components/layout/Header';
import SectionBase from 'components/layout/SectionBase';
import Cashback from 'components/layout/Cashback';
import Clients from 'components/layout/Cllients/Clients';
import Modal from 'components/layout/Modal';
import Footer from 'components/layout/Footer';
// import ModalSlider from "components/layout/ModalSlider";
import Chatbot from 'components/layout/Chatbot';
import ThemeContext from 'contexts/ThemeContext';
// import LangContext from 'contexts/LangContext'
import { useSelector } from 'react-redux';

const HomePage = () => {
  // const {theme} = useContext(ThemeContext)
  // const {lang} = useContext(LangContext)
  const { theme } = useSelector((state) => state.themeReducer);
  const { lang } = useSelector((state) => state.langReducer);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch();
  }, [lang]);

  return (
    <div className={`app ${theme}`}>
      {!data && <Preloader />}
      {/* {data && <Progress />} */}
      {/* {data?.header && <Header data={data.header} />} */}
      {data?.download && <SectionBase data={data.download} />}
      {data?.warranty && <SectionBase data={data.warranty} reverse />}
      {data?.care && <SectionBase data={data.care} />}
      {data?.cashback && <Cashback data={data.cashback} />}
      {data?.clients && <Clients data={data.clients} />}
      {data?.modal && <Modal data={data.modal} />}
      {/* {data?.footer && <Footer data={data.footer} />} */}

      {/* {previewDetails && <ModalSlider />} */}
      {data?.chatBot && <Chatbot data={data.chatBot} />}
    </div>
  );
};

export default HomePage;
