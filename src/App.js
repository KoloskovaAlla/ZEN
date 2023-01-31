import { useState, useEffect, useContext } from 'react';
import { useDocumentTitle } from 'hooks';
import ThemeContext from './contexts/ThemeContext';
import LangContext from './contexts/LangContext';
import Header from './components/layout/Header';
// import Clients from './components/layout/Cllients';
import Footer from './components/layout/Footer';
import Modal from './components/layout/Modal';
// import Preloader from './components/layout/Preloader/Preloader'
// import Progress from './components/layout/Progress'
// import handleWindowScroll from './utils/handleWindowScroll'
// import Slider from './components/layout/Slider'
import PreviewContext from 'contexts/PreviewContext';
import ModalSlider from 'components/layout/ModalSlider';
import Chatbot from 'components/layout/Chatbot';
import { Post } from './pages/Post';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { API_BASE_URL } from 'constants/api';
import { useSelector } from 'react-redux';

export const App = () => {
  useDocumentTitle('ZEN | Home');
  // const { theme } = useContext(ThemeContext);
  // const { lang } = useContext(LangContext);
  const { theme } = useSelector((state) => state.themeReducer);
  const { lang } = useSelector((state) => state.langReducer);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/${lang}/.json`)
      // fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch();
  }, [lang]);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleWindowScroll)
  //   return () => window.removeEventListener('scroll', handleWindowScroll)
  // }, [])

  // const { previewDetails } = useContext(PreviewContext);
  const { previewDetails } = useSelector((state) => state.previewReducer)


  const LazyHomePage = lazy(() => import('./pages/HomePage'));
  const LazyDownloadPage = lazy(() => import('./pages/DownloadPage'));
  const LazyWarrantyPage = lazy(() => import('./pages/WarrantyPage'));
  const LazyCarePage = lazy(() => import('./pages/CarePage'));
  const LazyCashbackPage = lazy(() => import('./pages/CashbackPage'));
  const LazyClientsPage = lazy(() => import('./pages/ClientsPage'));
  const LazyPostsPage = lazy(() => import('./pages/PostsPage'));

  return (
    <div className={`app ${theme}`}>
      {data?.header && <Header data={data.header} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<LazyHomePage />} />
          <Route path='/download' element={<LazyDownloadPage />} />
          <Route path='/warranty' element={<LazyWarrantyPage />} />
          <Route path='/care' element={<LazyCarePage />} />
          <Route path='/cashback' element={<LazyCashbackPage />} />
          <Route path='/clients' element={<LazyClientsPage />} />
          <Route path='/posts' element={<LazyPostsPage />}></Route>
          <Route path='/posts/:id' element={<Post />} />
        </Routes>
      </Suspense>

      {data?.footer && <Footer data={data.footer} />}
      {data?.modal && <Modal data={data.modal} />}
      {/* {previewDetails && <Slider />} */}
      {previewDetails && <ModalSlider />}
      {data?.chatBot && <Chatbot data={data.chatBot} />}
    </div>
  );
};

// {!data && <Preloader />}
// {data && <Progress />}
// {data?.header && <Header data={data.header} />}
// {data?.download && <SectionBase data={data.download} />}
// {data?.warranty && <SectionBase data={data.warranty} reverse />}
// {data?.care && <SectionBase data={data.care} />}
// {data?.cashback && <Cashback data={data.cashback} />}
// {data?.clients && <Clients data={data.clients} />}
// {data?.modal && <Modal data={data.modal} />}
// {data?.footer && <Footer data={data.footer} />}
// {/* {previewDetails && <Slider />} */}
// {previewDetails && <ModalSlider />}
// {data?.chatBot && <Chatbot data={data.chatBot} />}
