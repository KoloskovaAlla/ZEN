import { useContext } from 'react';
import ThemeContext from 'contexts/ThemeContext';
import { ReactComponent as IconMoon } from './assets/moonicon.svg';
import { ReactComponent as IconSun } from './assets/sunicon.svg';
import './Theme.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'reducers/themeSlice';

const Theme = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext)

  const { theme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    theme === 'dark' ? dispatch(setTheme('light')) : dispatch(setTheme('dark'));
  };

  const className = 'theme';

  return (
    <button onClick={toggleTheme} className={className}>
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default Theme;
