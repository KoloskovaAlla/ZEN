import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
// import { useEffect, useContext } from 'react';
// import LangContext from 'contexts/LangContext';
// import {classNames} from 'utils/helpers'
import './Language.scss';
import { useDispatch} from 'react-redux';
// import { setLang } from 'reducers/langSlice';
import {useLang} from 'hooks/useLang'

const Language = ({ languages }) => {
  const {lang} = useLang()
  const {setLang} = useLang()

  console.log(lang)


  const className = 'language';

  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    const langValue = event.currentTarget.value;
    dispatch(setLang(langValue));
    // toggleLang(langValue)
  };

  return (
    <label className={className}>
      <select
        value={localStorage.getItem('lang')}
        onChange={handleLanguageChange}
      >
        {languages.map((language) => (
          <option value={language.value} key={language.value}>
            {language.text && language.text}
          </option>
        ))}
      </select>

      <ArrowIcon />
    </label>
  );
};

export default Language;
