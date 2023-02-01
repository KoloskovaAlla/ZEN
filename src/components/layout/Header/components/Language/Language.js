import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import { useEffect, useContext } from 'react';
import LangContext from 'contexts/LangContext';
// import {classNames} from 'utils/helpers'
import './Language.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from 'reducers/langSlice';

const Language = ({ languages }) => {
  // const { lang, toggleLang } = useContext(LangContext)
  const { lang } = useSelector((state) => state.langReducer);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

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
