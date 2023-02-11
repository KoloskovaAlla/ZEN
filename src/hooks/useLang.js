import { useEffect } from 'react';
import {setLang} from 'reducers/langSlice'
import { useSelector } from 'react-redux';

export const useLang = () => {
 const {lang}  = useSelector((state) => state.langReducer);
  useEffect(() => {
     localStorage.setItem('lang', lang);
  }, [lang]);

  return {
    lang, setLang
  }
};
